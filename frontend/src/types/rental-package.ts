export type DeviceCategory =
  | 'circuit_breaker'
  | 'air_conditioner'
  | 'water_heater'
  | 'lighting'
  | 'smart_lock'
  | 'sensor'
  | 'other';

export interface RentalPackage {
  id: string;
  /** ID numérico real no backend (usado na chamada à API). */
  backendId?: number;
  propertyId: string;
  name: string;
  /** Preço base em centavos */
  basePriceInCents: number;
  durationHours?: number;
  energyLimitKwh?: number;
  /**
   * Categorias de dispositivos liberadas por este pacote.
   * Ex: Básico → ['circuit_breaker']
   *     Plus   → ['circuit_breaker', 'air_conditioner']
   *     Gold   → ['circuit_breaker', 'air_conditioner', 'water_heater']
   */
  allowedDeviceCategories: DeviceCategory[];
  description: string;
}
