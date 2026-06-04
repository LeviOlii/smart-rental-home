/**
 * Tipos de RentalPackage alinhados ao schema Prisma do backend.
 * O banco usa `basePrice` (Float em reais, não em centavos) e `id` numérico.
 */

export type DeviceCategory =
  | 'circuit_breaker'
  | 'air_conditioner'
  | 'water_heater'
  | 'lighting'
  | 'smart_lock'
  | 'sensor'
  | 'other';

/** Pacote de aluguel retornado pelo backend (GET /rental-packages?propertyId=X) */
export interface RentalPackage {
  id: number;
  propertyId: number;
  name: string;
  /** Preço base em reais (Float no banco) */
  basePrice: number;
  durationDays: number | null;
  durationHours: number | null;
  energyLimitKwh: number | null;
  pricePerExtraKwh: number | null;
  maxDevicesActive: number | null;
  allowedDeviceCategories: string[];
  createdAt: string;
}
