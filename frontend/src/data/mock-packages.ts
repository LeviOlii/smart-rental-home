import type { RentalPackage } from "@/types/rental-package";

/**
 * Pacotes mock para demonstração do sistema de QR Code.
 * Cada propriedade possui 3 pacotes: Básico, Plus e Gold.
 *
 * IDs numéricos seguindo o padrão do backend (começa em 1).
 * Na integração real, virão do endpoint GET /rental-packages?propertyId=X
 */
export const mockPackages: RentalPackage[] = [
  // ─── Studio Pinheiros (prop-003) — disponível ────────────────────────────────
  {
    id: "pkg-001",
    propertyId: "prop-003",
    name: "Básico",
    basePriceInCents: 8000, // R$ 80/dia
    durationHours: 24,
    energyLimitKwh: 5,
    allowedDeviceCategories: ["circuit_breaker", "lighting"],
    description:
      "Acesso à energia básica e iluminação. Ideal para estadias simples.",
  },
  {
    id: "pkg-002",
    propertyId: "prop-003",
    name: "Plus",
    basePriceInCents: 12000, // R$ 120/dia
    durationHours: 24,
    energyLimitKwh: 10,
    allowedDeviceCategories: ["circuit_breaker", "lighting", "air_conditioner"],
    description:
      "Inclui ar-condicionado para maior conforto durante a estadia.",
  },
  {
    id: "pkg-003",
    propertyId: "prop-003",
    name: "Gold",
    basePriceInCents: 18000, // R$ 180/dia
    durationHours: 24,
    energyLimitKwh: 20,
    allowedDeviceCategories: [
      "circuit_breaker",
      "lighting",
      "air_conditioner",
      "water_heater",
    ],
    description:
      "Acesso completo a todos os dispositivos, incluindo chuveiro elétrico e ar-condicionado.",
  },

  // ─── Flat Itaim Bibi (prop-005) — disponível ─────────────────────────────────
  {
    id: "pkg-004",
    propertyId: "prop-005",
    name: "Básico",
    basePriceInCents: 7000,
    durationHours: 24,
    energyLimitKwh: 5,
    allowedDeviceCategories: ["circuit_breaker", "lighting"],
    description: "Acesso à energia básica e iluminação.",
  },
  {
    id: "pkg-005",
    propertyId: "prop-005",
    name: "Plus",
    basePriceInCents: 11000,
    durationHours: 24,
    energyLimitKwh: 10,
    allowedDeviceCategories: ["circuit_breaker", "lighting", "air_conditioner"],
    description: "Inclui ar-condicionado para maior conforto.",
  },
  {
    id: "pkg-006",
    propertyId: "prop-005",
    name: "Gold",
    basePriceInCents: 16000,
    durationHours: 24,
    energyLimitKwh: 20,
    allowedDeviceCategories: [
      "circuit_breaker",
      "lighting",
      "air_conditioner",
      "water_heater",
    ],
    description: "Acesso completo a todos os dispositivos.",
  },
];
