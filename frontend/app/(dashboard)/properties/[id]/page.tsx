import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Cpu,
  DollarSign,
  User,
  CheckCircle,
  Home,
  Wrench,
  Zap,
  ZapOff,
  AlertTriangle,
  Thermometer,
  Lightbulb,
  Lock,
  Radio,
  CircleOff,
  QrCode,
} from "lucide-react";
import { mockProperties } from "@/data/mock-properties";
import { mockDevices } from "@/data/mock-devices";
import { mockPackages } from "@/data/mock-packages";
import { cn, formatCurrencyBRL } from "@/lib/utils";
import type { DeviceCategory, DeviceStatus } from "@/types/device";
import { QRCodeCard } from "../../../components/properties/qr-code-card";

// ─── Status config (property) ────────────────────────────────────────────────
const propertyStatusConfig = {
  available: {
    label: "Disponível",
    icon: CheckCircle,
    className: "text-emerald-700 bg-emerald-50 border-emerald-200",
    iconClassName: "text-emerald-500",
  },
  rented: {
    label: "Alugada",
    icon: Home,
    className: "text-brand-700 bg-brand-50 border-brand-200",
    iconClassName: "text-brand-500",
  },
  maintenance: {
    label: "Manutenção",
    icon: Wrench,
    className: "text-amber-600 bg-amber-50 border-amber-200",
    iconClassName: "text-amber-500",
  },
} as const;

// ─── Device category config ───────────────────────────────────────────────────
const categoryConfig: Record<
  DeviceCategory,
  { label: string; icon: React.ElementType; bgClassName: string; iconClassName: string }
> = {
  circuit_breaker: {
    label: "Disjuntor",
    icon: Zap,
    bgClassName: "bg-violet-100",
    iconClassName: "text-violet-600",
  },
  air_conditioner: {
    label: "Ar-condicionado",
    icon: Thermometer,
    bgClassName: "bg-sky-100",
    iconClassName: "text-sky-600",
  },
  water_heater: {
    label: "Chuveiro elétrico",
    icon: Zap,
    bgClassName: "bg-orange-100",
    iconClassName: "text-orange-600",
  },
  lighting: {
    label: "Iluminação",
    icon: Lightbulb,
    bgClassName: "bg-yellow-100",
    iconClassName: "text-yellow-600",
  },
  smart_lock: {
    label: "Fechadura smart",
    icon: Lock,
    bgClassName: "bg-indigo-100",
    iconClassName: "text-indigo-600",
  },
  sensor: {
    label: "Sensor",
    icon: Radio,
    bgClassName: "bg-teal-100",
    iconClassName: "text-teal-600",
  },
  other: {
    label: "Outro",
    icon: Cpu,
    bgClassName: "bg-surface-100",
    iconClassName: "text-surface-500",
  },
};

// ─── Device status config ─────────────────────────────────────────────────────
const deviceStatusConfig: Record<
  DeviceStatus,
  { label: string; icon: React.ElementType; badgeClassName: string; iconClassName: string }
> = {
  on: {
    label: "Ligado",
    icon: Zap,
    badgeClassName: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconClassName: "text-emerald-500",
  },
  off: {
    label: "Desligado",
    icon: ZapOff,
    badgeClassName: "bg-surface-100 text-surface-500 border-surface-200",
    iconClassName: "text-surface-400",
  },
  error: {
    label: "Erro",
    icon: AlertTriangle,
    badgeClassName: "bg-red-50 text-red-700 border-red-200",
    iconClassName: "text-red-500",
  },
};

// ─── Page component ───────────────────────────────────────────────────────────
interface PropertyDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params;
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
        <CircleOff className="h-12 w-12 text-surface-300" />
        <h2 className="text-lg font-semibold text-text-primary">Propriedade não encontrada</h2>
        <Link
          href="/properties"
          className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para propriedades
        </Link>
      </div>
    );
  }

  const devices = mockDevices.filter((d) => d.propertyId === property.id);
  const propStatus = propertyStatusConfig[property.status];
  const PropStatusIcon = propStatus.icon;

  const totalPowerWatts = devices.reduce((acc, d) => acc + d.powerWatts, 0);
  const onlineDevices = devices.filter((d) => d.status === "on").length;
  const errorDevices = devices.filter((d) => d.status === "error").length;

  // Group devices by category
  const groupedDevices = devices.reduce<Partial<Record<DeviceCategory, typeof devices>>>(
    (acc, device) => {
      if (!acc[device.category]) acc[device.category] = [];
      acc[device.category]!.push(device);
      return acc;
    },
    {}
  );

  const categoryOrder: DeviceCategory[] = [
    "circuit_breaker",
    "air_conditioner",
    "water_heater",
    "lighting",
    "smart_lock",
    "sensor",
    "other",
  ];

  const propertyPackages = mockPackages.filter((p) => p.propertyId === property.id);

  return (
    <div className="flex h-full flex-col">
      {/* Page Header */}
      <header className="sticky top-0 z-10 border-b border-surface-200 bg-white/80 backdrop-blur-sm">
        <div className="px-8 py-5">
          <div className="flex items-center gap-4">
            {/* Back link */}
            <Link
              href="/properties"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface-200 bg-surface-50 text-surface-500 transition-all hover:border-surface-300 hover:bg-surface-100 hover:text-surface-700"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-bold text-text-primary leading-none truncate">
                  {property.name}
                </h1>
                <span
                  className={cn(
                    "hidden sm:flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
                    propStatus.className
                  )}
                >
                  <PropStatusIcon className={cn("h-3 w-3", propStatus.iconClassName)} />
                  {propStatus.label}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-text-secondary flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                {property.address.street}, {property.address.neighborhood} —{" "}
                {property.address.city}/{property.address.state}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Total devices */}
          <div className="flex items-center gap-3 rounded-2xl border border-surface-200 bg-white p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
              <Cpu className="h-5 w-5 text-brand-600" />
            </div>
            <div>
              <p className="text-xs text-surface-500">Dispositivos</p>
              <p className="text-xl font-bold text-text-primary">{devices.length}</p>
            </div>
          </div>

          {/* Online */}
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
              <Zap className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-emerald-600">Online</p>
              <p className="text-xl font-bold text-emerald-700">{onlineDevices}</p>
            </div>
          </div>

          {/* Power */}
          <div className="flex items-center gap-3 rounded-2xl border border-surface-200 bg-white p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
              <Zap className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-surface-500">Consumo atual</p>
              <p className="text-xl font-bold text-text-primary">
                {totalPowerWatts >= 1000
                  ? `${(totalPowerWatts / 1000).toFixed(1)} kW`
                  : `${totalPowerWatts} W`}
              </p>
            </div>
          </div>

          {/* Monthly rent */}
          <div className="flex items-center gap-3 rounded-2xl border border-surface-200 bg-white p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
              <DollarSign className="h-5 w-5 text-brand-600" />
            </div>
            <div>
              <p className="text-xs text-surface-500">Aluguel/mês</p>
              <p className="text-xl font-bold text-text-primary">
                {formatCurrencyBRL(property.monthlyRentValueInCents)}
              </p>
            </div>
          </div>
        </div>

        {/* Error notice */}
        {errorDevices > 0 && (
          <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-500" />
            <p className="text-sm font-medium text-red-700">
              {errorDevices} dispositivo{errorDevices > 1 ? "s" : ""} com erro de comunicação.
              Verifique a conexão dos dispositivos afetados.
            </p>
          </div>
        )}

        {/* Tenant info */}
        {property.tenantName && (
          <div className="flex items-center gap-3 rounded-2xl border border-surface-200 bg-white px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-100">
              <User className="h-5 w-5 text-surface-600" />
            </div>
            <div>
              <p className="text-xs text-surface-500">Inquilino atual</p>
              <p className="text-sm font-semibold text-text-primary">{property.tenantName}</p>
            </div>
          </div>
        )}

        {/* Devices section */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-text-primary">Dispositivos cadastrados</h2>
            <span className="rounded-full bg-surface-100 px-2.5 py-0.5 text-xs font-semibold text-surface-600">
              {devices.length} total
            </span>
          </div>

          {devices.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-surface-300 bg-white py-16 gap-3">
              <Cpu className="h-10 w-10 text-surface-300" />
              <p className="text-sm text-surface-500">Nenhum dispositivo cadastrado</p>
            </div>
          ) : (
            <div className="space-y-6">
              {categoryOrder.map((category) => {
                const categoryDevices = groupedDevices[category];
                if (!categoryDevices || categoryDevices.length === 0) return null;

                const catConfig = categoryConfig[category];
                const CatIcon = catConfig.icon;

                return (
                  <div key={category}>
                    {/* Category header */}
                    <div className="mb-3 flex items-center gap-2">
                      <div
                        className={cn(
                          "flex h-7 w-7 items-center justify-center rounded-lg",
                          catConfig.bgClassName
                        )}
                      >
                        <CatIcon className={cn("h-4 w-4", catConfig.iconClassName)} />
                      </div>
                      <h3 className="text-sm font-semibold text-text-primary">
                        {catConfig.label}
                      </h3>
                      <span className="text-xs text-surface-400">
                        ({categoryDevices.length})
                      </span>
                    </div>

                    {/* Device cards */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {categoryDevices.map((device) => {
                        const devStatus = deviceStatusConfig[device.status];
                        const DevStatusIcon = devStatus.icon;

                        return (
                          <div
                            key={device.id}
                            className="group relative flex items-start gap-4 rounded-2xl border border-surface-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                          >
                            {/* Category icon */}
                            <div
                              className={cn(
                                "mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl",
                                catConfig.bgClassName
                              )}
                            >
                              <CatIcon className={cn("h-5 w-5", catConfig.iconClassName)} />
                            </div>

                            <div className="flex-1 min-w-0">
                              {/* Name + status badge */}
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-sm font-semibold text-text-primary leading-snug truncate">
                                  {device.name}
                                </p>
                                <span
                                  className={cn(
                                    "flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium",
                                    devStatus.badgeClassName
                                  )}
                                >
                                  <DevStatusIcon
                                    className={cn("h-3 w-3", devStatus.iconClassName)}
                                  />
                                  {devStatus.label}
                                </span>
                              </div>

                              {/* Location */}
                              <p className="mt-1 text-xs text-surface-500 flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {device.location}
                              </p>

                              {/* Power consumption */}
                              {device.status === "on" && device.powerWatts > 0 && (
                                <p className="mt-2 text-xs font-medium text-amber-600 flex items-center gap-1">
                                  <Zap className="h-3 w-3" />
                                  {device.powerWatts >= 1000
                                    ? `${(device.powerWatts / 1000).toFixed(1)} kW`
                                    : `${device.powerWatts} W`}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* QR Code Packages section — only for available properties */}
        {property.status === "available" && propertyPackages.length > 0 && (
          <section>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <QrCode className="h-5 w-5 text-brand-500" />
                <h2 className="text-base font-bold text-text-primary">Pacotes QR Code</h2>
              </div>
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-600 border border-brand-100">
                {propertyPackages.length} pacote{propertyPackages.length > 1 ? "s" : ""}
              </span>
            </div>
            <p className="mb-4 text-sm text-surface-500">
              Gere os QR Codes para esta propriedade. O cliente escaneia e confirma o pagamento para iniciar a estadia automaticamente.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {propertyPackages.map((pkg) => (
                <QRCodeCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
