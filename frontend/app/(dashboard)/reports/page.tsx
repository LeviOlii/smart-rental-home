"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useAuth } from "@/contexts/auth-context";
import { getSessions, getPropertyReadings, type ReadingPoint } from "@/lib/api";
import type { StaySession, SessionStatus } from "@/types/stay-session";
import { cn } from "@/lib/utils";
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FileBarChart2, Calendar, Zap, DollarSign, Activity,
  ArrowLeft, Home, TrendingUp, AlertTriangle,
  ChevronDown,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PropertySummary {
  id: number;
  name: string;
  address: string | null;
  sessions: StaySession[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<SessionStatus, { label: string; className: string }> = {
  SCHEDULED: { label: "Agendada",   className: "bg-sky-50 text-sky-700 border-sky-200" },
  ACTIVE:    { label: "Ativa",      className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  FINISHED:  { label: "Finalizada", className: "bg-surface-100 text-surface-600 border-surface-200" },
  CANCELLED: { label: "Cancelada",  className: "bg-red-50 text-red-600 border-red-200" },
};

const PERIODS = [
  { label: "24h",  hours: 24 },
  { label: "7d",   hours: 168 },
  { label: "30d",  hours: 720 },
  { label: "90d",  hours: 2160 },
] as const;

const KWH_RATE = 0.692;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDuration(startedAt: string | null, endedAt: string | null): string {
  if (!startedAt) return "—";
  const end = endedAt ? new Date(endedAt) : new Date();
  const diffMs = end.getTime() - new Date(startedAt).getTime();
  const h = Math.floor(diffMs / 3600000);
  const m = Math.floor((diffMs % 3600000) / 60000);
  return h > 0 ? `${h}h ${m}min` : `${m}min`;
}

function formatDate(d: string | null): string {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

function formatHour(d: string): string {
  return new Date(d).toLocaleString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
}

function toLocalDatetimeString(dateString: string | number | Date): string {
  const d = new Date(dateString);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricCard({ label, value, sub, icon: Icon, iconBg, iconColor }: {
  label: string; value: string | number; sub?: string;
  icon: React.ElementType; iconBg: string; iconColor: string;
}) {
  return (
    <div className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-surface-400">{label}</p>
        <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", iconBg)}>
          <Icon className={cn("h-4 w-4", iconColor)} />
        </div>
      </div>
      <p className="text-3xl font-bold text-text-primary tabular-nums">{value}</p>
      {sub && <p className="mt-1 text-xs text-surface-400">{sub}</p>}
    </div>
  );
}

function PropertyCard({ summary, onClick }: { summary: PropertySummary; onClick: () => void }) {
  const active = summary.sessions.some((s) => s.status === "ACTIVE");
  
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const monthSessions = summary.sessions.filter((s) => {
    const d = new Date(s.checkinAt);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  const finished = monthSessions.filter((s) => s.status === "FINISHED");
  const totalKwh = finished.reduce((a, s) => a + s.totalConsumptionKwh, 0);
  const estimatedCost = totalKwh * KWH_RATE;

  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-2xl border border-surface-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 border border-brand-100 group-hover:bg-brand-100 transition-colors">
            <Home className="h-4 w-4 text-brand-600" />
          </div>
          <div>
            <p className="font-semibold text-text-primary text-sm leading-tight">{summary.name}</p>
            {summary.address && (
              <p className="text-xs text-surface-400 mt-0.5 truncate max-w-48">{summary.address}</p>
            )}
          </div>
        </div>
        {active && (
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Ativa
          </span>
        )}
      </div>
      <div className="grid grid-cols-3 gap-3 border-t border-surface-100 pt-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-surface-400">Estadias no Mês</p>
          <p className="text-xl font-bold text-text-primary mt-0.5">{monthSessions.length}</p>
        </div>
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-surface-400">Consumo no Mês</p>
          <p className="text-xl font-bold text-text-primary mt-0.5">{totalKwh.toFixed(1)}<span className="text-xs font-medium text-surface-400 ml-0.5">kWh</span></p>
        </div>
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-surface-400">Custo Est. (Mês)</p>
          <p className="text-xl font-bold text-text-primary mt-0.5">
            R${estimatedCost.toFixed(0)}
          </p>
        </div>
      </div>
    </button>
  );
}

// ─── Property Detail Panel ────────────────────────────────────────────────────

function PropertyDetail({ summary, onBack }: { summary: PropertySummary; onBack: () => void }) {
  const [periodIdx, setPeriodIdx] = useState(1); // 1 = 7d, -1 = Custom
  const [dateRange, setDateRange] = useState<{ from: string; to: string }>(() => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
    return { from: toLocalDatetimeString(weekAgo), to: toLocalDatetimeString(now) };
  });
  
  const [customPopoverOpen, setCustomPopoverOpen] = useState(false);
  const [sessionFilter, setSessionFilter] = useState<string>("");
  const [readings, setReadings] = useState<ReadingPoint[]>([]);
  const [loadingChart, setLoadingChart] = useState(false);

  // Calcula o período efetivo baseado na seleção
  const { effectiveFrom, effectiveTo } = useMemo(() => {
    let fromIso = null;
    let toIso = null;
    if (periodIdx !== -1) {
      const hours = PERIODS[periodIdx].hours;
      const to = new Date();
      const from = new Date(to.getTime() - hours * 3600 * 1000);
      fromIso = from.toISOString();
      toIso = to.toISOString();
    } else if (dateRange.from && dateRange.to) {
      fromIso = new Date(dateRange.from).toISOString();
      toIso = new Date(dateRange.to).toISOString();
    }
    return { effectiveFrom: fromIso, effectiveTo: toIso };
  }, [periodIdx, dateRange.from, dateRange.to]);

  // Filtra as sessões para as métricas do topo (sempre o mês atual, conforme solicitado)
  const monthFinishedSessions = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    return summary.sessions.filter((s) => {
      const d = new Date(s.checkinAt);
      return s.status === "FINISHED" && d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });
  }, [summary.sessions]);

  const metrics = useMemo(() => {
    const totalKwh = monthFinishedSessions.reduce((a, s) => a + s.totalConsumptionKwh, 0);
    const totalDays = monthFinishedSessions.reduce((a, s) => {
      const start = s.startedAt ? new Date(s.startedAt) : new Date(s.checkinAt);
      const end = s.endedAt ? new Date(s.endedAt) : new Date();
      const days = Math.max((end.getTime() - start.getTime()) / (1000 * 3600 * 24), 0.5);
      return a + days;
    }, 0);
    
    const avgKwhPerDay = totalDays > 0 ? totalKwh / totalDays : 0;
    const avgKwhPerSession = monthFinishedSessions.length > 0 ? totalKwh / monthFinishedSessions.length : 0;
    const estimatedCost = totalKwh * KWH_RATE;
    
    return { avgKwhPerSession, avgKwhPerDay, estimatedCost, count: monthFinishedSessions.length };
  }, [monthFinishedSessions]);

  // Filtra sessões que ocorrem dentro do período selecionado para o gráfico de barras e tabela
  const filteredSessions = useMemo(() => {
    if (!effectiveFrom || !effectiveTo) return [];
    const fromTime = new Date(effectiveFrom).getTime();
    const toTime = new Date(effectiveTo).getTime();

    return summary.sessions
      .filter((s) => s.status === "FINISHED")
      .filter((s) => {
        const sessionStart = new Date(s.checkinAt).getTime();
        const sessionEnd = s.endedAt ? new Date(s.endedAt).getTime() : new Date().getTime();
        return sessionStart <= toTime && sessionEnd >= fromTime; // Interseção de datas
      })
      .sort((a, b) => new Date(a.checkinAt).getTime() - new Date(b.checkinAt).getTime());
  }, [summary.sessions, effectiveFrom, effectiveTo]);

  // Dados do gráfico de barras: kWh por sessão (apenas do período)
  const barData = useMemo(() =>
    filteredSessions.map((s) => ({
      label: formatDate(s.checkinAt),
      kWh: parseFloat(s.totalConsumptionKwh.toFixed(3)),
      client: s.clientName,
    })),
    [filteredSessions]
  );

  const fetchReadings = useCallback(async () => {
    if (!effectiveFrom || !effectiveTo) return;
    setLoadingChart(true);
    try {
      const data = await getPropertyReadings(summary.id, effectiveFrom, effectiveTo);
      setReadings(data);
    } catch {
      setReadings([]);
    } finally {
      setLoadingChart(false);
    }
  }, [summary.id, effectiveFrom, effectiveTo]);

  useEffect(() => { fetchReadings(); }, [fetchReadings]);

  const areaData = readings.map((r) => ({
    time: new Date(r.bucket).getTime(), // timestamp numérico para o Recharts respeitar o eixo
    watts: parseFloat(r.avgWatts.toFixed(1)),
  }));

  return (
    <div className="space-y-6">
      {/* Back + Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-surface-500 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <div>
          <h2 className="text-lg font-bold text-text-primary">{summary.name}</h2>
          {summary.address && <p className="text-xs text-surface-400">{summary.address}</p>}
        </div>
      </div>

      {/* Property Metrics (Always current month) */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <MetricCard label="Sessões no Mês" value={metrics.count} sub="finalizadas no mês atual" icon={Calendar} iconBg="bg-brand-50" iconColor="text-brand-600" />
        <MetricCard label="Média por Sessão" value={`${metrics.avgKwhPerSession.toFixed(1)} kWh`} icon={Zap} iconBg="bg-amber-50" iconColor="text-amber-600" />
        <MetricCard label="Média Diária" value={`${metrics.avgKwhPerDay.toFixed(1)} kWh/dia`} sub="indicador de eficiência" icon={TrendingUp} iconBg="bg-violet-50" iconColor="text-violet-600" />
        <MetricCard label="Custo Mensal da Propriedade" value={`R$ ${metrics.estimatedCost.toFixed(2)}`} sub={`Mês de ${new Date().toLocaleString("pt-BR", { month: "long" })}`} icon={DollarSign} iconBg="bg-emerald-50" iconColor="text-emerald-600" />
      </div>

      {/* Consumption over time — Area Chart */}
      <div className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-5 gap-4">
          <div>
            <p className="font-semibold text-text-primary">Consumo ao Longo do Tempo</p>
            <p className="text-xs text-surface-400 mt-0.5">Média de Watts por hora (todos os dispositivos)</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Opções Rápidas */}
            <div className="flex bg-surface-100 p-0.5 rounded-lg border border-surface-200">
              {PERIODS.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => { setPeriodIdx(i); setCustomPopoverOpen(false); }}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                    periodIdx === i
                      ? "bg-white text-text-primary shadow-sm"
                      : "text-surface-500 hover:text-text-primary"
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Custom Popover (Shadcn style) */}
            <div className="relative">
              <button
                onClick={() => setCustomPopoverOpen(!customPopoverOpen)}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
                  periodIdx === -1 || customPopoverOpen
                    ? "bg-brand-50 border-brand-200 text-brand-700 shadow-sm"
                    : "bg-white border-surface-200 text-surface-600 hover:bg-surface-50"
                )}
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Personalizado</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-50" />
              </button>

              {customPopoverOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setCustomPopoverOpen(false)} 
                  />
                  <div className="absolute right-0 top-full mt-2 w-72 z-50 rounded-xl border border-surface-200 bg-white p-4 shadow-lg animate-in fade-in zoom-in-95 duration-200">
                    <p className="text-xs font-semibold text-text-primary mb-3">Sessões Recentes</p>
                    
                    <div className="space-y-1 mb-4 max-h-32 overflow-y-auto pr-1 custom-scrollbar">
                      {summary.sessions.length === 0 && (
                        <p className="text-xs text-surface-400">Nenhuma sessão encontrada.</p>
                      )}
                      {summary.sessions.slice(0, 10).map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setPeriodIdx(-1);
                            setSessionFilter(String(s.id));
                            setDateRange({
                              from: toLocalDatetimeString(s.startedAt ?? s.checkinAt),
                              to: toLocalDatetimeString(s.endedAt ?? s.checkoutAt),
                            });
                          }}
                          className={cn(
                            "w-full flex flex-col text-left px-2.5 py-1.5 rounded-md text-xs transition-colors",
                            sessionFilter === String(s.id)
                              ? "bg-brand-50 text-brand-700 font-medium"
                              : "text-text-secondary hover:bg-surface-100"
                          )}
                        >
                          <span className="truncate">{s.clientName}</span>
                          <span className="text-[10px] text-surface-400">{formatDate(s.checkinAt)}</span>
                        </button>
                      ))}
                    </div>

                    <div className="h-px bg-surface-100 w-full my-3" />

                    <p className="text-xs font-semibold text-text-primary mb-3">Data Específica</p>
                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-surface-400 tracking-wider mb-1 block">De</label>
                        <input
                          type="datetime-local"
                          value={dateRange.from}
                          onChange={(e) => {
                            setPeriodIdx(-1);
                            setSessionFilter("");
                            setDateRange(p => ({ ...p, from: e.target.value }));
                          }}
                          className="w-full rounded-md border border-surface-200 bg-white px-2.5 py-1.5 text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-surface-400 tracking-wider mb-1 block">Até</label>
                        <input
                          type="datetime-local"
                          value={dateRange.to}
                          onChange={(e) => {
                            setPeriodIdx(-1);
                            setSessionFilter("");
                            setDateRange(p => ({ ...p, to: e.target.value }));
                          }}
                          className="w-full rounded-md border border-surface-200 bg-white px-2.5 py-1.5 text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="h-52">
          {loadingChart ? (
            <div className="h-full animate-pulse rounded-xl bg-surface-100" />
          ) : areaData.length === 0 ? (
            <div className="flex h-full items-center justify-center flex-col gap-2">
              <Zap className="h-8 w-8 text-surface-300" />
              <p className="text-sm text-surface-400">Sem leituras no período selecionado</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis
                  dataKey="time"
                  type="number"
                  scale="time"
                  domain={["dataMin", "dataMax"]}
                  tick={{ fontSize: 10, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                  interval="preserveStartEnd"
                  tickFormatter={(ts: any) =>
                    new Date(ts).toLocaleString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })
                  }
                />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} unit="W" />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }}
                  labelFormatter={(ts: any) =>
                    new Date(ts).toLocaleString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })
                  }
                  formatter={(v: any) => [`${v} W`, "Média"]}
                />
                <Area type="monotone" dataKey="watts" stroke="#6366f1" strokeWidth={2} fill="url(#areaGrad)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* kWh per session — Bar Chart */}
      {barData.length > 0 && (
        <div className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <p className="font-semibold text-text-primary">Consumo por Estadia</p>
            <p className="text-xs text-surface-400 mt-0.5">kWh registrado por sessão finalizada (últimas 10)</p>
          </div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} unit="kWh" />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }}
                  formatter={(v: any, _: any, props: any) => [
                    `${v} kWh`,
                    props.payload.client,
                  ]}
                />
                <Bar dataKey="kWh" radius={[6, 6, 0, 0]} fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Sessions table for this property */}
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-surface-100 flex items-center justify-between">
          <p className="font-semibold text-text-primary">Histórico de Estadias</p>
          <span className="text-xs text-surface-500">Filtrado pelo período selecionado</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-100 bg-surface-50">
                {["Hóspede", "Check-in", "Duração", "Status", "Consumo", "Média/Dia", "Custo Est."].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-surface-400">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {filteredSessions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-surface-500">
                    Nenhuma estadia encontrada no período selecionado.
                  </td>
                </tr>
              ) : (
                filteredSessions.map((s) => {
                  const start = s.startedAt ? new Date(s.startedAt) : new Date(s.checkinAt);
                  const end = s.endedAt ? new Date(s.endedAt) : new Date();
                  const days = Math.max((end.getTime() - start.getTime()) / (1000 * 3600 * 24), 0.5);
                  const kwhPerDay = s.totalConsumptionKwh / days;
                  const cost = s.totalConsumptionKwh * KWH_RATE;

                return (
                  <tr key={s.id} className="hover:bg-surface-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-text-primary">{s.clientName}</td>
                    <td className="px-4 py-3 text-surface-500 whitespace-nowrap">{formatDate(s.checkinAt)}</td>
                    <td className="px-4 py-3 text-surface-500 whitespace-nowrap">{formatDuration(s.startedAt, s.endedAt)}</td>
                    <td className="px-4 py-3">
                      <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", STATUS_CONFIG[s.status].className)}>
                        {STATUS_CONFIG[s.status].label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-surface-500 tabular-nums">
                      {s.totalConsumptionKwh > 0 ? `${s.totalConsumptionKwh.toFixed(1)} kWh` : "—"}
                    </td>
                    <td className="px-4 py-3 text-surface-500 tabular-nums">
                      {s.totalConsumptionKwh > 0 ? `${kwhPerDay.toFixed(1)} kWh` : "—"}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-surface-600 font-medium">
                      R$ {cost.toFixed(2)}
                    </td>
                  </tr>
                );
              })
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ReportsPage() {
  const { userId } = useAuth();

  const [sessions, setSessions] = useState<StaySession[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const monthName = now.toLocaleString("pt-BR", { month: "long" });
  const formattedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1) + " de " + currentYear;

  useEffect(() => {
    if (!userId) return;
    getSessions(userId)
      .then(setSessions)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Erro ao carregar"))
      .finally(() => setIsLoading(false));
  }, [userId]);

  // Filtra as sessões apenas para o mês atual
  const currentMonthSessions = useMemo(() => {
    return sessions.filter((s) => {
      const d = new Date(s.checkinAt);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });
  }, [sessions, currentMonth, currentYear]);

  // Agrupa TODAS as sessões por propriedade (para que o PropertyDetail possa usar histórico completo)
  const properties = useMemo<PropertySummary[]>(() => {
    const map = new Map<number, PropertySummary>();
    for (const s of sessions) {
      if (!map.has(s.property.id)) {
        map.set(s.property.id, { id: s.property.id, name: s.property.name, address: s.property.address, sessions: [] });
      }
      map.get(s.property.id)!.sessions.push(s);
    }
    return Array.from(map.values());
  }, [sessions]);

  const selectedProperty = properties.find((p) => p.id === selectedPropertyId) ?? null;

  // Global metrics
  const metrics = useMemo(() => {
    const finished = currentMonthSessions.filter((s) => s.status === "FINISHED");
    const totalKwh = finished.reduce((a, s) => a + s.totalConsumptionKwh, 0);
    return {
      total: currentMonthSessions.length,
      active: currentMonthSessions.filter((s) => s.status === "ACTIVE").length,
      totalKwh,
      estimatedCost: totalKwh * KWH_RATE,
    };
  }, [currentMonthSessions]);

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-surface-200 bg-white/90 backdrop-blur-sm px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 border border-brand-100">
            <FileBarChart2 className="h-5 w-5 text-brand-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary leading-none">Relatórios</h1>
            <p className="text-sm text-text-secondary mt-0.5">
              {selectedProperty ? selectedProperty.name : `Fechamento de ${formattedMonth}`}
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
        {isLoading ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-28 animate-pulse rounded-2xl bg-surface-100" />)}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-44 animate-pulse rounded-2xl bg-surface-100" />)}
            </div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <FileBarChart2 className="h-12 w-12 text-surface-300" />
            <p className="text-sm text-surface-500">{error}</p>
          </div>
        ) : selectedProperty ? (
          <PropertyDetail summary={selectedProperty} onBack={() => setSelectedPropertyId(null)} />
        ) : (
          <>
            {/* Global Metrics */}
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              <MetricCard label="Estadias no Mês" value={metrics.total} sub={`em ${properties.length} propriedades`} icon={Calendar} iconBg="bg-brand-50" iconColor="text-brand-600" />
              <MetricCard label="Ativas Agora" value={metrics.active} icon={Activity} iconBg="bg-emerald-50" iconColor="text-emerald-600" />
              <MetricCard label="Consumo do Mês" value={`${metrics.totalKwh.toFixed(1)} kWh`} sub="soma das estadias finalizadas" icon={Zap} iconBg="bg-amber-50" iconColor="text-amber-600" />
              <MetricCard label="Estimativa Total de Custo Mensal" value={`R$ ${metrics.estimatedCost.toFixed(2)}`} sub={`Mês de ${monthName}`} icon={DollarSign} iconBg="bg-violet-50" iconColor="text-violet-600" />
            </div>

            {/* Property Cards */}
            <div>
              <p className="text-sm font-semibold text-surface-500 mb-3">Selecione uma propriedade para ver o relatório detalhado de {monthName}</p>
              {properties.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-surface-300 bg-white py-20 gap-3">
                  <Home className="h-10 w-10 text-surface-300" />
                  <p className="text-sm text-surface-500">Nenhuma estadia registrada neste mês</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {properties.map((p) => (
                    <PropertyCard key={p.id} summary={p} onClick={() => setSelectedPropertyId(p.id)} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
