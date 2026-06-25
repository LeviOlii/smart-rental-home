"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft, MapPin, Cpu, CheckCircle, Home, Wrench,
  Zap, CircleOff, QrCode,
} from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { getProperty, getPackages } from "@/lib/api";
import type { Property } from "@/types/property";
import type { RentalPackage } from "@/types/rental-package";
import { cn } from "@/lib/utils";
import { QRCodeCard } from "../../../components/properties/qr-code-card";
import { DeviceCard, EnergyChartSection, ChartPoint } from "../../../components/properties/property-detail-components";
import { io, Socket } from "socket.io-client";

// ─── Status config ────────────────────────────────────────────────────────────
const statusConfig = {
  AVAILABLE: { label: "Disponível", icon: CheckCircle, badge: "text-emerald-700 bg-emerald-50 border-emerald-200", icon_: "text-emerald-500" },
  OCCUPIED:  { label: "Ocupada",    icon: Home,         badge: "text-brand-700 bg-brand-50 border-brand-200",     icon_: "text-brand-500" },
  INACTIVE:  { label: "Inativa",    icon: Wrench,       badge: "text-amber-600 bg-amber-50 border-amber-200",     icon_: "text-amber-500" },
} as const;

// ─── Skeleton Loading ─────────────────────────────────────────────────────────
function PageSkeleton() {
  return (
    <div className="flex h-full flex-col">
      <header className="sticky top-0 z-10 border-b border-surface-200 bg-white/80 backdrop-blur-sm px-8 py-5">
        <div className="flex items-center gap-4">
          <Link href="/properties" className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface-200 bg-surface-50 text-surface-500">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="h-5 w-48 animate-pulse rounded-lg bg-surface-200" />
        </div>
      </header>
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-32 animate-pulse rounded-2xl bg-surface-100" />
          <div className="h-32 animate-pulse rounded-2xl bg-surface-100" />
        </div>
        <div className="h-80 animate-pulse rounded-2xl bg-surface-100" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-2xl bg-surface-100" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PropertyDetailPage() {
  const params = useParams<{ id: string }>();
  const { userId } = useAuth();

  const [property, setProperty] = useState<Property | null>(null);
  const [packages, setPackages] = useState<RentalPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Realtime state
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (!userId || !params.id) return;
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      setTimeout(() => { setError("ID inválido."); setIsLoading(false); }, 0);
      return;
    }
    Promise.all([getProperty(id, userId), getPackages(id)])
      .then(([prop, pkgs]) => { setProperty(prop); setPackages(pkgs); })
      .catch((err: unknown) => setError(err instanceof Error ? err.message : "Erro ao carregar."))
      .finally(() => setIsLoading(false));
      
    // Conecta ao WebSocket
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    const socketIo = io(apiUrl);
    setSocket(socketIo);

    socketIo.on("connect", () => {
      console.log("WebSocket conectado:", socketIo.id);
    });

    socketIo.on("telemetry_update", (data: { deviceId: number, value?: number, createdAt?: string, details?: any, isStateUpdate?: boolean, isActive?: boolean }) => {
      
      // Se for apenas uma mudança de status (ex: usuário ligou pelo botão físico)
      if (data.isStateUpdate) {
        setProperty(prev => {
          if (!prev) return prev;
          const newDevices = prev.devices.map(d => 
            d.id === data.deviceId ? { ...d, isActive: data.isActive } as any : d
          );
          return { ...prev, devices: newDevices };
        });
        return; // Retorna cedo para não tentar plotar gráfico vazio
      }

      // Se for telemetria (Consumo de energia em Watts)
      const timeLabel = new Date(data.createdAt!).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      setChartData(prev => {
        const newData = [...prev, { time: timeLabel, watts: data.value, deviceId: data.deviceId } as any];
        if (newData.length > 50) return newData.slice(newData.length - 50);
        return newData;
      });

      // Atualiza potência do dispositivo no estado da propriedade
      setProperty(prev => {
        if (!prev) return prev;
        const newDevices = prev.devices.map(d => 
          d.id === data.deviceId ? { ...d, powerWatts: data.value, isActive: true, telemetryDetails: data.details } as any : d
        );
        return { ...prev, devices: newDevices };
      });
    });

    return () => {
      socketIo.disconnect();
    };
  }, [userId, params.id]);

  if (isLoading) return <PageSkeleton />;

  if (error || !property) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
        <CircleOff className="h-12 w-12 text-surface-300" />
        <h2 className="text-lg font-semibold text-text-primary">{error ?? "Propriedade não encontrada"}</h2>
        <Link href="/properties" className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
      </div>
    );
  }

  // ─── Calculated values ─────────────────────────────────────────────────────
  const st = statusConfig[property.status];
  const StatusIcon = st.icon;
  const devices = property.devices;
  const onlineDevices = devices.filter(d => d.isActive);
  const onlineCount = onlineDevices.length;
  const totalPowerWatts = onlineDevices.reduce((acc, d) => acc + (d.powerWatts ?? 0), 0);
  const activeSession = property.sessions.find(s => s.status === "ACTIVE" || s.status === "SCHEDULED") ?? null;
  const hasActiveSession = !!activeSession;

  // Power bar color
  const powerLevel = totalPowerWatts > 4000 ? "red" : totalPowerWatts > 1500 ? "amber" : "emerald";
  const powerBarColors = { red: "bg-red-500", amber: "bg-amber-500", emerald: "bg-emerald-500" };
  const powerTextColors = { red: "text-red-600", amber: "text-amber-600", emerald: "text-text-primary" };
  const powerIconBgs = { red: "bg-red-100", amber: "bg-amber-100", emerald: "bg-emerald-100" };
  const powerIconColors = { red: "text-red-600", amber: "text-amber-600", emerald: "text-emerald-600" };

  return (
    <div className="flex h-full flex-col">
      {/* ─── Header ──────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 border-b border-surface-200 bg-white/90 backdrop-blur-sm">
        <div className="px-8 py-5">
          <div className="flex items-center gap-4">
            <Link
              href="/properties"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-surface-200 bg-surface-50 text-surface-500 transition-all hover:border-surface-300 hover:bg-surface-100"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold text-text-primary leading-none truncate">{property.name}</h1>
                <span className={cn("hidden sm:flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium", st.badge)}>
                  <StatusIcon className={cn("h-3 w-3", st.icon_)} />
                  {st.label}
                </span>
              </div>
              {property.address && (
                <p className="mt-1 text-sm text-text-secondary flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {property.address}
                </p>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ─── Body ────────────────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-5">

        {/* BENTO TOP ROW */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Card: Online Devices */}
          <div className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-surface-400">
                Dispositivos Online
              </p>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                <Cpu className="h-4 w-4 text-emerald-600" />
              </div>
            </div>
            <p className="text-5xl font-bold text-text-primary tabular-nums">
              {onlineCount}
              <span className="ml-1.5 text-lg font-normal text-surface-400">/ {devices.length}</span>
            </p>
            {/* Dot matrix — 1 dot per device */}
            {devices.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {devices.map(d => (
                  <div key={d.id} title={d.name} className="flex items-center gap-1.5">
                    <span className={cn(
                      "h-2.5 w-2.5 rounded-full transition-colors",
                      d.isActive ? "bg-emerald-500" : "bg-surface-200"
                    )} />
                    <span className="text-xs text-surface-400 truncate max-w-20">{d.name.split(" ")[0]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card: Total Power */}
          <div className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-surface-400">
                Consumo Total Atual
              </p>
              <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", powerIconBgs[powerLevel])}>
                <Zap className={cn("h-4 w-4", powerIconColors[powerLevel])} />
              </div>
            </div>
            <p className={cn("text-5xl font-bold tabular-nums", powerTextColors[powerLevel])}>
              {totalPowerWatts >= 1000
                ? (totalPowerWatts / 1000).toFixed(1)
                : totalPowerWatts}
              <span className="ml-1.5 text-lg font-normal text-surface-400">
                {totalPowerWatts >= 1000 ? "kW" : "W"}
              </span>
            </p>
            {/* Progress bar (max reference: 6kW) */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1.5 text-xs text-surface-400">
                <span>0 W</span>
                <span>6 kW</span>
              </div>
              <div className="h-2 w-full rounded-full bg-surface-100 overflow-hidden">
                <div
                  className={cn("h-full rounded-full transition-all duration-700", powerBarColors[powerLevel])}
                  style={{ width: `${Math.min((totalPowerWatts / 6000) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ENERGY CHART SECTION */}
        <EnergyChartSection
          devices={devices}
          activeSession={activeSession}
          hasActiveSession={hasActiveSession}
          totalPowerWatts={totalPowerWatts}
          chartData={chartData}
        />

        {/* DEVICE GRID */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-text-primary">Dispositivos</h2>
            <span className="rounded-full bg-surface-100 px-2.5 py-0.5 text-xs font-semibold text-surface-600">
              {onlineCount} online · {devices.length} total
            </span>
          </div>

          {devices.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-surface-300 bg-white py-16 gap-3">
              <Cpu className="h-10 w-10 text-surface-300" />
              <p className="text-sm text-surface-500">Nenhum dispositivo cadastrado</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {devices.map(device => (
                <DeviceCard 
                  key={device.id} 
                  device={device} 
                  onToggle={(deviceId, action) => {
                    if (socket) socket.emit("device:control", { deviceId, action });
                  }}
                />
              ))}
            </div>
          )}
        </section>

        {/* QR CODE PACKAGES — apenas para AVAILABLE */}
        {property.status === "AVAILABLE" && packages.length > 0 && (
          <section>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <QrCode className="h-5 w-5 text-brand-500" />
                <h2 className="text-base font-bold text-text-primary">Pacotes QR Code</h2>
              </div>
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-600 border border-brand-100">
                {packages.length} pacote{packages.length > 1 ? "s" : ""}
              </span>
            </div>
            <p className="mb-4 text-sm text-surface-500">
              Gere os QR Codes para esta propriedade. O cliente escaneia e confirma o pagamento para iniciar a estadia automaticamente.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {packages.map(pkg => (
                <QRCodeCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
