/**
 * Tipos de dispositivo alinhados ao schema Prisma do backend.
 * O banco usa `type` (string livre) e `isActive` (boolean).
 */

/** Categorias de dispositivo conhecidas — usadas na lógica de exibição */
export type DeviceCategory =
  | "circuit_breaker"
  | "air_conditioner"
  | "water_heater"
  | "lighting"
  | "smart_lock"
  | "sensor"
  | "other";

/** Última leitura de telemetria de um dispositivo */
export interface DeviceReading {
  id: string;
  value: number;
  createdAt: string;
  deviceId: number;
}

/** Dispositivo retornado pelo backend (GET /devices?propertyId=X) */
export interface Device {
  id: number;
  name: string;
  /** Categoria livre do backend, mapeada para DeviceCategory na UI */
  type: string;
  /** Tópico MQTT do dispositivo */
  topic: string;
  isActive: boolean;
  powerWatts: number | null;
  lastSeen: string | null;
  createdAt: string;
  propertyId: number;
  /** Última leitura (inclusa pelo backend) */
  readings: DeviceReading[];
}
