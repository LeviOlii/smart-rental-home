/**
 * Tipos de Sessão de Estadia — alinhados ao schema Prisma do backend.
 */

export type SessionStatus = "SCHEDULED" | "ACTIVE" | "FINISHED" | "CANCELLED";

export interface SessionPackage {
  id: number;
  name: string;
  basePrice: number;
  energyLimitKwh: number | null;
  pricePerExtraKwh: number | null;
}

export interface SessionProperty {
  id: number;
  name: string;
  address: string | null;
}

export interface StaySession {
  id: number;
  clientName: string;
  status: SessionStatus;
  checkinAt: string;
  checkoutAt: string;
  startedAt: string | null;
  endedAt: string | null;
  totalConsumptionKwh: number;
  extraConsumptionKwh: number;
  extraCost: number;
  createdAt: string;
  propertyId: number;
  packageId: number | null;
  package: SessionPackage | null;
  property: SessionProperty;
}
