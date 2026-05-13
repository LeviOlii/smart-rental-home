export type DeviceStatus = "on" | "off" | "error";

export type DeviceCategory =
  | "circuit_breaker"
  | "air_conditioner"
  | "water_heater"
  | "lighting"
  | "smart_lock"
  | "sensor"
  | "other";

export interface Device {
  id: string;
  propertyId: string;
  name: string;
  category: DeviceCategory;
  status: DeviceStatus;
  /** Current power consumption in watts (mock/real-time) */
  powerWatts: number;
  /** Location within the property, e.g. "Sala", "Quarto 1" */
  location: string;
}
