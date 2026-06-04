/**
 * Tipos alinhados ao schema Prisma do backend.
 * PropertyStatus usa os enums do Prisma (uppercase).
 */

export type PropertyStatus = "AVAILABLE" | "OCCUPIED" | "INACTIVE";

/** Shape de um dispositivo embutido na resposta de propriedade */
export interface PropertyDevice {
  id: number;
  name: string;
  type: string;
  topic: string;
  isActive: boolean;
  powerWatts: number | null;
  lastSeen: string | null;
  propertyId: number;
}

/** Shape de uma sessão ativa embutida na resposta */
export interface ActiveSession {
  id: number;
  clientName: string;
  status: string;
  startedAt: string | null;
  checkoutAt: string;
}

/** Propriedade completa retornada pelo backend (GET /properties?userId=X) */
export interface Property {
  id: number;
  name: string;
  /** Endereço como string plana, ex: "Rua Oscar Freire, 1204 — Jardins, São Paulo/SP" */
  address: string | null;
  status: PropertyStatus;
  createdAt: string;
  userId: number;
  devices: PropertyDevice[];
  sessions: ActiveSession[];
  _count: { devices: number };
}
