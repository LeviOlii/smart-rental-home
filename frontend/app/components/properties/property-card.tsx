import Link from "next/link";
import { CheckCircle, Home, Wrench, MapPin, Cpu, Activity } from "lucide-react";
import type { Property } from "@/types/property";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

const statusDisplayConfig = {
  AVAILABLE: {
    label: "Disponível",
    icon: CheckCircle,
    className: "text-emerald-700 bg-emerald-50 border-emerald-200",
    iconClassName: "text-emerald-500",
    accentClassName: "bg-gradient-to-r from-emerald-400 to-emerald-600",
  },
  OCCUPIED: {
    label: "Ocupada",
    icon: Home,
    className: "text-brand-700 bg-brand-50 border-brand-200",
    iconClassName: "text-brand-500",
    accentClassName: "bg-gradient-to-r from-brand-400 to-brand-600",
  },
  INACTIVE: {
    label: "Inativa",
    icon: Wrench,
    className: "text-amber-600 bg-amber-50 border-amber-200",
    iconClassName: "text-amber-500",
    accentClassName: "bg-gradient-to-r from-amber-400 to-amber-600",
  },
} as const;

export function PropertyCard({ property }: PropertyCardProps) {
  const statusConfig = statusDisplayConfig[property.status];
  const StatusIcon = statusConfig.icon;

  const totalDevices = property._count.devices;
  const activeDevices = property.devices.filter((d) => d.isActive).length;
  const hasActiveSession = property.sessions.length > 0;

  const deviceOnlinePercentage =
    totalDevices > 0 ? Math.round((activeDevices / totalDevices) * 100) : 0;

  return (
    <article className="group flex flex-col rounded-2xl border border-surface-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-surface-200/60 hover:-translate-y-0.5 overflow-hidden">
      {/* Color accent bar */}
      <div className={cn("h-1.5 w-full", statusConfig.accentClassName)} />

      <div className="flex flex-col gap-4 p-5">
        {/* Header: name + status badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-text-primary leading-snug">
            {property.name}
          </h3>
          <span
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
              statusConfig.className
            )}
          >
            <StatusIcon className={cn("h-3 w-3", statusConfig.iconClassName)} />
            {statusConfig.label}
          </span>
        </div>

        {/* Address */}
        {property.address ? (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm group/addr hover:text-brand-600 transition-colors duration-200"
          >
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-surface-400 group-hover/addr:text-brand-500 transition-colors duration-200" />
            <p className="font-medium text-surface-700 group-hover/addr:text-brand-700 transition-colors duration-200 underline-offset-2 group-hover/addr:underline">
              {property.address}
            </p>
          </a>
        ) : (
          <p className="flex items-center gap-2 text-sm text-surface-400">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            Endereço não informado
          </p>
        )}

        {/* Divider */}
        <div className="border-t border-surface-100" />

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Devices */}
          <div className="flex items-center gap-2 rounded-xl bg-surface-50 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100">
              <Cpu className="h-4 w-4 text-brand-600" />
            </div>
            <div>
              <p className="text-xs text-surface-500">Dispositivos</p>
              <p className="text-sm font-semibold text-text-primary">
                {activeDevices}{" "}
                <span className="font-normal text-surface-400">
                  / {totalDevices}
                </span>
              </p>
            </div>
          </div>

          {/* Session status */}
          <div className="flex items-center gap-2 rounded-xl bg-surface-50 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100">
              <Activity className="h-4 w-4 text-brand-600" />
            </div>
            <div>
              <p className="text-xs text-surface-500">Estadia</p>
              <p className="text-sm font-semibold text-text-primary">
                {hasActiveSession ? (
                  <span className="text-brand-600">Ativa</span>
                ) : (
                  <span className="text-surface-400">Sem estadia</span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Device health bar */}
        {totalDevices > 0 && (
          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="text-surface-500">Dispositivos online</span>
              <span
                className={cn(
                  "font-medium",
                  deviceOnlinePercentage === 100
                    ? "text-brand-600"
                    : deviceOnlinePercentage >= 50
                      ? "text-amber-600"
                      : "text-red-500"
                )}
              >
                {deviceOnlinePercentage}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-100">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  deviceOnlinePercentage === 100
                    ? "bg-brand-500"
                    : deviceOnlinePercentage >= 50
                      ? "bg-amber-400"
                      : "bg-red-400"
                )}
                style={{ width: `${deviceOnlinePercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Active session tenant */}
        {hasActiveSession && property.sessions[0].clientName && (
          <p className="text-xs text-surface-500">
            Hóspede:{" "}
            <span className="font-medium text-surface-700">
              {property.sessions[0].clientName}
            </span>
          </p>
        )}

        {/* Action button */}
        <Link
          href={`/properties/${property.id}`}
          className="mt-1 flex w-full items-center justify-center rounded-xl border border-surface-200 bg-surface-50 py-2.5 text-sm font-medium text-surface-600 transition-all duration-200 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
        >
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}
