export class CreateStaySessionDto {
  clientName: string;
  propertyId: number;

  checkinAt: string; // ISO date string
  checkoutAt: string; // ISO date string

  /** ID do pacote de aluguel associado (opcional) */
  packageId?: number;

  /** Overrides manuais caso não use pacote */
  customEnergyLimitKwh?: number;
  customPricePerExtraKwh?: number;
}
