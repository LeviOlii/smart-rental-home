export type PropertyStatus = "available" | "rented" | "maintenance";

export interface Property {
  id: string;
  name: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  deviceCount: number;
  activeDeviceCount: number;
  status: PropertyStatus;
  thumbnailUrl?: string;
  monthlyRentValueInCents: number;
  tenantName?: string;
}
