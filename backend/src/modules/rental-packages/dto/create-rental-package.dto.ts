export class CreateRentalPackageDto {
  name: string;
  basePrice: number;
  propertyId: number;

  /** Duração do pacote */
  durationDays?: number;
  durationHours?: number;

  /** Franquia energética */
  energyLimitKwh?: number;
  pricePerExtraKwh?: number;

  /** Limite de dispositivos ativos simultaneamente */
  maxDevicesActive?: number;

  /**
   * Categorias de dispositivos liberadas por este pacote.
   * Ex: ["circuit_breaker"] = Básico, + ["air_conditioner"] = Plus, + ["water_heater"] = Gold
   */
  allowedDeviceCategories?: string[];
}

