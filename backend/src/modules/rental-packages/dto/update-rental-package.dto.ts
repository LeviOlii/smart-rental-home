export class UpdateRentalPackageDto {
  name?: string;
  basePrice?: number;
  durationDays?: number;
  durationHours?: number;
  energyLimitKwh?: number;
  pricePerExtraKwh?: number;
  maxDevicesActive?: number;
}
