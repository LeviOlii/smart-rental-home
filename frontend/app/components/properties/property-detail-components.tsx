"use client";

import { useState } from "react";
import {
  Zap, ZapOff, Cpu, Thermometer, Lightbulb, Lock, Radio,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import type { PropertyDevice, ActiveSession } from "@/types/property";
import { cn } from "@/lib/utils";

// ─── Category config ──────────────────────────────────────────────────────────
export const categoryConfig: Record<
  string,
  { label: string; icon: React.ElementType; iconBg: string; iconColor: string; cardBg: string; borderColor: string }
> = {
  circuit_breaker: { label: "Disjuntor",       icon: Zap,         iconBg: "bg-violet-100", iconColor: "text-violet-600", cardBg: "bg-violet-50/80",  borderColor: "border-violet-200" },
  air_conditioner: { label: "Ar-condicionado", icon: Thermometer, iconBg: "bg-sky-100",    iconColor: "text-sky-600",    cardBg: "bg-sky-50/80",      borderColor: "border-sky-200" },
  water_heater:    { label: "Chuveiro",         icon: Zap,         iconBg: "bg-orange-100", iconColor: "text-orange-600", cardBg: "bg-orange-50/80",   borderColor: "border-orange-200" },
  lighting:        { label: "Iluminação",       icon: Lightbulb,   iconBg: "bg-yellow-100", iconColor: "text-yellow-600", cardBg: "bg-yellow-50/80",   borderColor: "border-yellow-200" },
  smart_lock:      { label: "Fechadura",        icon: Lock,        iconBg: "bg-indigo-100", iconColor: "text-indigo-600", cardBg: "bg-indigo-50/80",   borderColor: "border-indigo-200" },
  sensor:          { label: "Sensor",           icon: Radio,       iconBg: "bg-teal-100",   iconColor: "text-teal-600",   cardBg: "bg-teal-50/80",     borderColor: "border-teal-200" },
  other:           { label: "Outro",            icon: Cpu,         iconBg: "bg-surface-100",iconColor: "text-surface-500",cardBg: "bg-surface-50",     borderColor: "border-surface-200" },
};

export function getCatConfig(type: string) {
  return categoryConfig[type] ?? categoryConfig["other"];
}

// ─── Toggle Switch ────────────────────────────────────────────────────────────
function ToggleSwitch({ isOn }: { isOn: boolean }) {
  return (
    <div className={cn(
      "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200",
      isOn ? "bg-emerald-500" : "bg-surface-300"
    )}>
      <span className={cn(
        "inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200",
        isOn ? "translate-x-4" : "translate-x-0.5"
      )} />
    </div>
  );
}

// ─── Device Card ─────────────────────────────────────────────────────────────
export function DeviceCard({ device }: { device: PropertyDevice }) {
  const [isOn, setIsOn] = useState(device.isActive);
  const cfg = getCatConfig(device.type);
  const Icon = cfg.icon;

  return (
    <div className={cn(
      "relative flex flex-col gap-3 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
      isOn ? `${cfg.cardBg} ${cfg.borderColor} shadow-sm` : "bg-white border-surface-200 shadow-sm"
    )}>
      {/* Pulsing online indicator */}
      {isOn && (
        <span className="absolute top-3 right-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
        </span>
      )}

      {/* Icon */}
      <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl", cfg.iconBg)}>
        <Icon className={cn("h-6 w-6 transition-colors", isOn ? cfg.iconColor : "text-surface-400")} />
      </div>

      {/* Name + label */}
      <div className="flex-1 min-w-0">
        <p className={cn("text-sm font-semibold leading-snug truncate", isOn ? "text-text-primary" : "text-surface-400")}>
          {device.name}
        </p>
        <p className="mt-0.5 text-xs text-surface-400">{cfg.label}</p>
      </div>

      {/* Footer: power/status + toggle */}
      <div className="flex items-center justify-between">
        {isOn && device.powerWatts && device.powerWatts > 0 ? (
          <p className="text-xs font-semibold text-amber-600 flex items-center gap-1">
            <Zap className="h-3 w-3" />
            {device.powerWatts >= 1000 ? `${(device.powerWatts / 1000).toFixed(1)} kW` : `${device.powerWatts} W`}
          </p>
        ) : (
          <span className={cn("flex items-center gap-1 text-xs font-medium", isOn ? "text-emerald-600" : "text-surface-400")}>
            {isOn ? <Zap className="h-3 w-3" /> : <ZapOff className="h-3 w-3" />}
            {isOn ? "Online" : "Offline"}
          </span>
        )}
        <button
          onClick={() => setIsOn(v => !v)}
          title="Controle via MQTT (em breve)"
          className="focus:outline-none active:scale-95 transition-transform"
        >
          <ToggleSwitch isOn={isOn} />
        </button>
      </div>
    </div>
  );
}

// ─── Chart point type ─────────────────────────────────────────────────────────
export interface ChartPoint { time: string; watts: number }

// ─── Energy Chart Section ─────────────────────────────────────────────────────
interface EnergyChartProps {
  devices: PropertyDevice[];
  activeSession: ActiveSession | null;
  hasActiveSession: boolean;
  totalPowerWatts: number;
}

export function EnergyChartSection({
  devices, activeSession, hasActiveSession, totalPowerWatts,
}: EnergyChartProps) {
  const [selectedId, setSelectedId] = useState<"all" | number>("all");

  // Sem leituras reais ainda — gráfico vazio
  const chartData: ChartPoint[] = [];

  // Estima energia consumida na sessão
  const elapsedMs = activeSession?.startedAt
    ? Date.now() - new Date(activeSession.startedAt).getTime()
    : 0;
  const elapsedHours = elapsedMs / (1000 * 60 * 60);
  const elapsedLabel = (() => {
    const h = Math.floor(elapsedHours);
    const m = Math.floor((elapsedMs % (1000 * 60 * 60)) / (1000 * 60));
    return h > 0 ? `${h}h ${m}min` : `${m}min`;
  })();
  const estimatedKwh = parseFloat(((totalPowerWatts * elapsedHours) / 1000).toFixed(3));

  return (
    <section className="rounded-2xl border border-surface-200 bg-white shadow-sm overflow-hidden">
      {/* Section header — muda cor conforme sessão */}
      <div className={cn(
        "flex items-center justify-between px-6 py-4 border-b",
        hasActiveSession
          ? "bg-brand-50 border-brand-100"
          : "bg-surface-50 border-surface-200"
      )}>
        <div className="flex items-center gap-3">
          <div className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg",
            hasActiveSession ? "bg-brand-100" : "bg-surface-200"
          )}>
            <Zap className={cn("h-4 w-4", hasActiveSession ? "text-brand-600" : "text-surface-400")} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-text-primary">Consumo Energético</h2>
            <p className={cn("text-xs mt-0.5", hasActiveSession ? "text-brand-600" : "text-surface-500")}>
              {hasActiveSession
                ? `Sessão ativa · ${activeSession?.clientName ?? "Hóspede"}`
                : "Nenhuma sessão ativa no momento"}
            </p>
          </div>
        </div>
        {/* Session status pill */}
        <span className={cn(
          "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
          hasActiveSession
            ? "bg-brand-500 border-brand-500 text-white"
            : "bg-surface-100 border-surface-200 text-surface-500"
        )}>
          {hasActiveSession && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
          )}
          {hasActiveSession ? "Em andamento" : "Disponível"}
        </span>
      </div>

      {/* Session info strips — só aparecem com sessão ativa */}
      {hasActiveSession && activeSession && (
        <div className="grid grid-cols-2 gap-px bg-surface-100 border-b border-surface-100 sm:grid-cols-4">
          {[
            { label: "Hóspede",          value: activeSession.clientName },
            { label: "Tempo de sessão",  value: elapsedLabel },
            { label: "Estimativa kWh",   value: `${estimatedKwh} kWh` },
            { label: "Check-out",        value: new Date(activeSession.checkoutAt).toLocaleDateString("pt-BR", { day:"2-digit", month:"short", hour:"2-digit", minute:"2-digit" }) },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white px-5 py-3">
              <p className="text-xs text-surface-400">{label}</p>
              <p className="mt-0.5 text-sm font-semibold text-text-primary truncate">{value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Device filter pills */}
      <div className="flex items-center gap-2 overflow-x-auto px-6 py-3 border-b border-surface-100 scrollbar-none">
        <button
          onClick={() => setSelectedId("all")}
          className={cn(
            "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-all",
            selectedId === "all"
              ? "bg-brand-500 border-brand-500 text-white shadow-sm"
              : "border-surface-200 text-surface-600 hover:border-brand-300 hover:text-brand-600"
          )}
        >
          Todos os dispositivos
        </button>
        {devices.map(d => (
          <button
            key={d.id}
            onClick={() => setSelectedId(d.id)}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-all",
              selectedId === d.id
                ? "bg-brand-500 border-brand-500 text-white shadow-sm"
                : "border-surface-200 text-surface-600 hover:border-brand-300 hover:text-brand-600"
            )}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Chart area */}
      <div className="relative px-6 py-5">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
              <defs>
                <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="time" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} unit="W" />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }}
                formatter={(v: number) => [`${v} W`, "Consumo"]}
              />
              <Area type="monotone" dataKey="watts" stroke="#6366f1" strokeWidth={2} fill="url(#energyGradient)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Empty state overlay */}
        {chartData.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-100">
              <Zap className="h-5 w-5 text-surface-400" />
            </div>
            <p className="text-sm font-medium text-surface-500">Aguardando leituras</p>
            <p className="text-xs text-surface-400">O gráfico será preenchido em tempo real</p>
          </div>
        )}
      </div>
    </section>
  );
}
