export class CreateDeviceDto {
  name: string;
  /** Tipo do dispositivo: ex. 'disjuntor_geral', 'ar_condicionado', 'chuveiro' */
  type: string;
  /** Tópico MQTT único do dispositivo. ex: "1/3/telemetria" */
  topic: string;
  /** Potência em Watts — usado para simulação de consumo */
  powerWatts?: number;
  propertyId: number;
}
