import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { DevicesService } from '../devices/devices.service';
import * as mqtt from 'mqtt';

@Injectable()
export class MqttService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(MqttService.name);
  private client: mqtt.MqttClient;
  private onTelemetryCallback?: (data: any) => void;

  constructor(private readonly devicesService: DevicesService) {}

  onTelemetry(callback: (data: any) => void) {
    this.onTelemetryCallback = callback;
  }

  async onModuleInit() {
    this.logger.log('MqttService: Conectando ao broker MQTT...');
    
    const url = process.env.MQTT_BROKER_URL;
    if (!url) {
      this.logger.error('MQTT_BROKER_URL não definida no .env');
      return;
    }

    this.client = mqtt.connect(url, {
      username: process.env.MQTT_BROKER_USERNAME,
      password: process.env.MQTT_BROKER_PASSWORD,
    });

    this.client.on('connect', async () => {
      this.logger.log('MqttService: Conectado com sucesso ao broker.');
      
      // Busca tópicos de medição no banco
      const devices = await this.devicesService.findAllWithMeasurementTopic();
      
      if (devices.length === 0) {
        this.logger.warn('Nenhum tópico de medição encontrado no banco.');
      }

      for (const device of devices) {
        if (device.measurementMqttTopic) {
          this.client.subscribe(device.measurementMqttTopic, (err) => {
            if (!err) {
              this.logger.log(`Inscrito no tópico de energia: ${device.measurementMqttTopic}`);
            } else {
              this.logger.error(`Erro ao inscrever no tópico: ${device.measurementMqttTopic}`, err);
            }
          });
        }
      }
    });

    this.client.on('message', this.handleTelemetryMessage.bind(this));
    
    this.client.on('error', (err) => {
      this.logger.error('Erro na conexão MQTT', err);
    });
  }

  onModuleDestroy() {
    if (this.client) {
      this.client.end();
      this.logger.log('MqttService: conexão com broker encerrada.');
    }
  }

  async handleTelemetryMessage(topic: string, payload: Buffer) {
    try {
      const payloadString = payload.toString().trim();
      let value = 0;
      let details = null;

      try {
        const data = JSON.parse(payloadString);
        value = data.potencia; // Extrai a potência do JSON do ESP32
        details = data;
      } catch (e) {
        // Fallback pra caso mande um número puro
        value = parseFloat(payloadString);
      }
      
      if (isNaN(value)) {
         this.logger.warn(`Payload não numérico ignorado no tópico ${topic}: ${payloadString}`);
         return;
      }

      this.logger.debug(`Telemetria MQTT [${topic}]: ${value} W`);
      
      const device = await this.devicesService.findByMeasurementTopic(topic);
      if (!device) return;

      const reading = await this.devicesService.saveTelemetryReading(device.id, value);

      // Emite pro WebSocket para empurrar pro Frontend
      if (this.onTelemetryCallback) {
        this.onTelemetryCallback({ 
          deviceId: device.id, 
          value, 
          createdAt: reading.createdAt,
          details
        });
      }
    } catch (error) {
      this.logger.error(`Erro ao processar mensagem MQTT do tópico ${topic}`, error);
    }
  }

  async publishCommand(topic: string, action: string) {
    if (!topic) return;
    this.logger.log(`Publicando MQTT -> Tópico: ${topic} | Ação: ${action}`);
    if (this.client && this.client.connected) {
      this.client.publish(topic, action, { qos: 1 });
    } else {
      this.logger.error('Cliente MQTT não está conectado para publicar.');
    }
  }
}
