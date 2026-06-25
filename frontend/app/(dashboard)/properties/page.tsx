"use client";

import { useEffect, useState } from "react";
import { Home, Search, SlidersHorizontal } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { getProperties } from "@/lib/api";
import type { Property } from "@/types/property";
import { PropertyCard } from "@/app/components/properties/property-card";

export default function PropertiesPage() {
  const { userId } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  useEffect(() => {
    if (!userId) return;

    getProperties(userId)
      .then(setProperties)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : "Erro ao carregar propriedades.")
      )
      .finally(() => setIsLoading(false));
  }, [userId]);

  const availableCount = properties.filter((p) => p.status === "AVAILABLE").length;
  const rentedCount = properties.filter((p) => p.status === "OCCUPIED").length;
  const maintenanceCount = properties.filter((p) => p.status === "INACTIVE").length;
  const totalDeviceCount = properties.reduce((acc, p) => acc + p._count.devices, 0);

  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.address && p.address.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = statusFilter === "ALL" || p.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

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
                  {properties.length} propriedades · {rentedCount} ocupadas · {totalDeviceCount} dispositivos
                </p>
              </div>
            </div>
          </div>

          {/* Search bar + filter row */}
          <div className="mt-4 flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-400" />
              <input
                type="search"
                placeholder="Buscar propriedade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-surface-200 bg-surface-50 py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder-surface-400 outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-500/15"
              />
            </div>

            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none cursor-pointer flex items-center gap-2 rounded-xl border border-surface-200 bg-surface-50 pl-3.5 pr-8 py-2.5 text-sm text-surface-600 transition-all hover:border-surface-300 hover:bg-surface-100 outline-none focus:ring-2 focus:ring-brand-500/15"
              >
                <option value="ALL">Todos os status</option>
                <option value="AVAILABLE">Disponíveis</option>
                <option value="OCCUPIED">Ocupadas</option>
                <option value="INACTIVE">Inativas</option>
              </select>
              <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-surface-400" />
            </div>
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
              status: "AVAILABLE",
              colorClassName: "text-emerald-600",
              dotClassName: "bg-emerald-500",
            },
            {
              label: "Ocupadas",
              value: rentedCount,
              status: "OCCUPIED",
              colorClassName: "text-brand-600",
              dotClassName: "bg-brand-500",
            },
            {
              label: "Inativas",
              value: maintenanceCount,
              status: "INACTIVE",
              colorClassName: "text-amber-600",
              dotClassName: "bg-amber-400",
            },
          ].map((statusSummary) => (
            <button
              key={statusSummary.label}
              onClick={() => setStatusFilter(statusFilter === statusSummary.status ? "ALL" : statusSummary.status)}
              className={`flex items-center gap-2 rounded-md px-2 py-1 transition-colors ${
                statusFilter === statusSummary.status ? "bg-surface-100" : "hover:bg-surface-50"
              }`}
            >
              <div className={`h-2 w-2 rounded-full ${statusSummary.dotClassName}`} />
              <span className="text-xs text-surface-500">{statusSummary.label}:</span>
              <span className={`text-xs font-semibold ${statusSummary.colorClassName}`}>
                {statusSummary.value}
              </span>
            </button>
          ))}

          <div className="ml-auto text-xs text-surface-400">
            {isLoading ? "Carregando..." : "Dados ao vivo"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-52 rounded-2xl border border-surface-200 bg-white animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 py-16 gap-3">
            <p className="text-sm font-medium text-red-700">{error}</p>
            <p className="text-xs text-red-500">Verifique se o backend está rodando em {process.env.NEXT_PUBLIC_API_URL}</p>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-surface-300 bg-white py-16 gap-3">
            <Search className="h-10 w-10 text-surface-300" />
            <p className="text-sm text-surface-500">Nenhuma propriedade encontrada para este filtro.</p>
            <button 
              onClick={() => { setSearchQuery(""); setStatusFilter("ALL"); }}
              className="mt-2 text-xs font-medium text-brand-600 hover:text-brand-700"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
