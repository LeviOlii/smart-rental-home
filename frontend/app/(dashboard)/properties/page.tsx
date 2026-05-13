import { Home, Search, SlidersHorizontal } from "lucide-react";
import { mockProperties } from "@/data/mock-properties";
import { PropertyCard } from "@/app/components/properties/property-card";

const availableCount = mockProperties.filter((p) => p.status === "available").length;
const rentedCount = mockProperties.filter((p) => p.status === "rented").length;
const maintenanceCount = mockProperties.filter((p) => p.status === "maintenance").length;

const totalDeviceCount = mockProperties.reduce(
  (accumulator, property) => accumulator + property.deviceCount,
  0
);

export default function PropertiesPage() {
  return (
    <div className="flex h-full flex-col">
      {/* Page Header */}
      <header className="sticky top-0 z-10 border-b border-surface-200 bg-white/80 backdrop-blur-sm">
        <div className="px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50">
                <Home className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-text-primary leading-none">
                  Minhas Propriedades
                </h1>
                <p className="mt-0.5 text-sm text-text-secondary">
                  {mockProperties.length} propriedades · {rentedCount} alugadas · {totalDeviceCount} dispositivos
                </p>
              </div>
            </div>

            {/* Future: Add property button */}
            <button className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-brand-500/20 transition-all duration-200 hover:bg-brand-600 hover:shadow-brand-600/30">
              + Nova Propriedade
            </button>
          </div>

          {/* Search bar + filter row */}
          <div className="mt-4 flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-400" />
              <input
                type="search"
                placeholder="Buscar propriedade..."
                className="w-full rounded-xl border border-surface-200 bg-surface-50 py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder-surface-400 outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-500/15"
              />
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-surface-200 bg-surface-50 px-3.5 py-2.5 text-sm text-surface-600 transition-all hover:border-surface-300 hover:bg-surface-100">
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </button>
          </div>
        </div>
      </header>

      {/* Summary stats strip */}
      <div className="border-b border-surface-200 bg-white px-8 py-3">
        <div className="flex items-center gap-6">
          {[
            {
              label: "Disponíveis",
              value: availableCount,
              colorClassName: "text-emerald-600",
              dotClassName: "bg-emerald-500",
            },
            {
              label: "Alugadas",
              value: rentedCount,
              colorClassName: "text-brand-600",
              dotClassName: "bg-brand-500",
            },
            {
              label: "Em manutenção",
              value: maintenanceCount,
              colorClassName: "text-amber-600",
              dotClassName: "bg-amber-400",
            },
          ].map((statusSummary) => (
            <div key={statusSummary.label} className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${statusSummary.dotClassName}`} />
              <span className="text-xs text-surface-500">{statusSummary.label}:</span>
              <span className={`text-xs font-semibold ${statusSummary.colorClassName}`}>
                {statusSummary.value}
              </span>
            </div>
          ))}

          <div className="ml-auto text-xs text-surface-400">
            Última atualização: agora
          </div>
        </div>
      </div>

      {/* Properties grid */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
