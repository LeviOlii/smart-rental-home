import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * DeviceReadingsService — acesso ao histórico de leituras de consumo.
 *
 * O método getAggregated() usa SQL raw com date_trunc + FLOOR para
 * agregar leituras em janelas de tempo usando PostgreSQL padrão
 * (compatível com Supabase, sem necessidade do TimescaleDB).
 */
@Injectable()
export class DeviceReadingsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Retorna o histórico de leituras de um dispositivo em um intervalo de tempo.
   * Padrão: últimas 24 horas.
   */
  findHistory(deviceId: number, from?: string, to?: string) {
    const dateFrom = from
      ? new Date(from)
      : new Date(Date.now() - 24 * 60 * 60 * 1000);
    const dateTo = to ? new Date(to) : new Date();

    return this.prisma.deviceReading.findMany({
      where: {
        deviceId,
        createdAt: { gte: dateFrom, lte: dateTo },
      },
      orderBy: { createdAt: 'desc' },
      take: 1000, // limite de segurança
    });
  }

  /**
   * Retorna a leitura mais recente de um dispositivo.
   */
  findLatest(deviceId: number) {
    return this.prisma.deviceReading.findFirst({
      where: { deviceId },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Insere uma leitura manual (útil para testes e simulação sem ESP32).
   */
  create(deviceId: number, value: number) {
    return this.prisma.deviceReading.create({
      data: { deviceId, value },
    });
  }

  /**
   * Agrega leituras por janela de tempo usando PostgreSQL puro (sem TimescaleDB).
   *
   * Equivalente ao time_bucket do TimescaleDB, mas usando date_trunc + FLOOR:
   *   bucket = date_trunc('hour', createdAt) + FLOOR(minute / bucketMinutes) * bucketMinutes min
   *
   * @param deviceId      ID do dispositivo
   * @param bucketMinutes Tamanho do bucket em minutos (ex: 5 = a cada 5 min). Padrão: 5
   * @param hours         Quantas horas para trás buscar (padrão: 1)
   */
  async getAggregated(deviceId: number, bucketMinutes = 5, hours = 1) {
    type AggRow = { bucket: Date; avg_value: number; count: bigint };

    const rows = await this.prisma.$queryRaw<AggRow[]>`
      SELECT
        date_trunc('hour', "createdAt") +
          (FLOOR(EXTRACT(MINUTE FROM "createdAt")::float / ${bucketMinutes})::int
           * ${bucketMinutes} * interval '1 minute') AS bucket,
        AVG(value)::float  AS avg_value,
        COUNT(*)           AS count
      FROM "DeviceReading"
      WHERE "deviceId"  = ${deviceId}
        AND "createdAt" > NOW() - (${hours} * interval '1 hour')
      GROUP BY bucket
      ORDER BY bucket DESC
    `;

    // Serializa BigInt para number para evitar erro de JSON
    return rows.map((r) => ({
      bucket: r.bucket,
      avgValue: r.avg_value,
      count: Number(r.count),
    }));
  }
}
