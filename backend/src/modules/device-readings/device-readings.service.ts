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
      take: 1000,
    });
  }

  /**
   * Agrega leituras de TODOS os dispositivos de uma propriedade por bucket dinâmico.
   * Ideal para o gráfico histórico da página de relatórios.
   */
  async findHistoryByProperty(
    propertyId: number,
    from?: string,
    to?: string,
  ) {
    const dateFrom = from
      ? new Date(from)
      : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const dateTo = to ? new Date(to) : new Date();

    const diffHours = (dateTo.getTime() - dateFrom.getTime()) / (1000 * 60 * 60);

    type Row = { bucket: Date; avg_watts: number };
    let rows: Row[];

    if (diffHours <= 24) {
      // Resolução de minutos (5 min para períodos muito curtos, 15 min até 1 dia)
      const bucketMinutes = diffHours <= 6 ? 5 : 15;
      rows = await this.prisma.$queryRaw<Row[]>`
        SELECT
          date_trunc('hour', dr."createdAt") +
            (FLOOR(EXTRACT(MINUTE FROM dr."createdAt")::float / ${bucketMinutes})::int
             * ${bucketMinutes} * interval '1 minute') AS bucket,
          AVG(dr.value)::float               AS avg_watts
        FROM "DeviceReading" dr
        INNER JOIN "Device" d ON d.id = dr."deviceId"
        WHERE d."propertyId" = ${propertyId}
          AND dr."createdAt" BETWEEN ${dateFrom} AND ${dateTo}
        GROUP BY bucket
        ORDER BY bucket ASC
      `;
    } else if (diffHours <= 31 * 24) {
      // Resolução de 1 hora
      rows = await this.prisma.$queryRaw<Row[]>`
        SELECT
          date_trunc('hour', dr."createdAt") AS bucket,
          AVG(dr.value)::float               AS avg_watts
        FROM "DeviceReading" dr
        INNER JOIN "Device" d ON d.id = dr."deviceId"
        WHERE d."propertyId" = ${propertyId}
          AND dr."createdAt" BETWEEN ${dateFrom} AND ${dateTo}
        GROUP BY bucket
        ORDER BY bucket ASC
      `;
    } else {
      // Resolução de 1 dia para períodos bem longos (ex: 90 dias)
      rows = await this.prisma.$queryRaw<Row[]>`
        SELECT
          date_trunc('day', dr."createdAt") AS bucket,
          AVG(dr.value)::float               AS avg_watts
        FROM "DeviceReading" dr
        INNER JOIN "Device" d ON d.id = dr."deviceId"
        WHERE d."propertyId" = ${propertyId}
          AND dr."createdAt" BETWEEN ${dateFrom} AND ${dateTo}
        GROUP BY bucket
        ORDER BY bucket ASC
      `;
    }

    // Preenchimento de tempo (Time Series Padding)
    // Para garantir que o gráfico mostre o período inteiro de X a Y, mesmo onde não há consumo (0W)
    let intervalMs = 60 * 60 * 1000; // 1 hora
    if (diffHours <= 6) intervalMs = 5 * 60 * 1000;
    else if (diffHours <= 24) intervalMs = 15 * 60 * 1000;
    else if (diffHours > 31 * 24) intervalMs = 24 * 60 * 60 * 1000;

    let start = dateFrom.getTime();
    start = Math.floor(start / intervalMs) * intervalMs; // Arredonda para o bucket mais próximo
    const end = dateTo.getTime();

    const lookup = new Map<number, number>();
    for (const r of rows) {
      const bTime = Math.floor(new Date(r.bucket).getTime() / intervalMs) * intervalMs;
      lookup.set(bTime, r.avg_watts);
    }

    const filledTimeline: { bucket: Date; avgWatts: number }[] = [];
    for (let t = start; t <= end; t += intervalMs) {
      filledTimeline.push({
        bucket: new Date(t),
        avgWatts: lookup.get(t) ?? 0, // Se não teve consumo no período, é 0W
      });
    }

    return filledTimeline;
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
