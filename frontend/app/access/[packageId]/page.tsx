"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  CheckCircle,
  Zap,
  Clock,
  Package,
  AlertTriangle,
  Loader2,
  Home,
  ChevronRight,
} from "lucide-react";
import { mockPackages } from "@/data/mock-packages";
import { mockProperties } from "@/data/mock-properties";
import { formatCurrencyBRL } from "@/lib/utils";
import type { DeviceCategory } from "@/types/rental-package";

const deviceCategoryLabels: Record<DeviceCategory, { label: string; emoji: string }> = {
  circuit_breaker: { label: "Energia básica", emoji: "⚡" },
  lighting: { label: "Iluminação", emoji: "💡" },
  air_conditioner: { label: "Ar-condicionado", emoji: "❄️" },
  water_heater: { label: "Chuveiro elétrico", emoji: "🚿" },
  smart_lock: { label: "Fechadura smart", emoji: "🔐" },
  sensor: { label: "Sensores", emoji: "📡" },
  other: { label: "Outros dispositivos", emoji: "🔧" },
};

const packageThemes: Record<string, { gradient: string; icon: string; accentBg: string }> = {
  Básico: {
    gradient: "from-slate-600 to-slate-800",
    icon: "🏠",
    accentBg: "bg-slate-50",
  },
  Plus: {
    gradient: "from-blue-500 to-blue-700",
    icon: "⚡",
    accentBg: "bg-blue-50",
  },
  Gold: {
    gradient: "from-amber-400 to-amber-600",
    icon: "👑",
    accentBg: "bg-amber-50",
  },
};

type Step = "info" | "confirming" | "success" | "error";

export default function AccessPage() {
  const params = useParams<{ packageId: string }>();
  const router = useRouter();
  const [step, setStep] = useState<Step>("info");
  const [errorMsg, setErrorMsg] = useState("");

  const pkg = mockPackages.find((p) => p.id === params.packageId);
  const property = pkg ? mockProperties.find((p) => p.id === pkg.propertyId) : undefined;

  // Pacote não encontrado
  if (!pkg || !property) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface-50 p-8">
        <AlertTriangle className="h-12 w-12 text-amber-400" />
        <h1 className="text-xl font-bold text-text-primary">Pacote não encontrado</h1>
        <p className="text-sm text-surface-500 text-center max-w-xs">
          O link que você escaneou parece estar inválido ou expirado.
        </p>
      </div>
    );
  }

  const theme = packageThemes[pkg.name] ?? packageThemes["Básico"];

  // ─── Confirmar pagamento ──────────────────────────────────────────────────
  const handleConfirm = async () => {
    setStep("confirming");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // Se não tiver backendId ou URL da API configurada, simula sucesso (modo demo/mock)
    if (!pkg.backendId || !apiUrl) {
      setTimeout(() => setStep("success"), 1200);
      return;
    }

    try {
      const res = await fetch(
        `${apiUrl}/stay-sessions/start-from-package/${pkg.backendId}`,
        { method: "POST" }
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? "Erro ao confirmar pagamento.");
      }
      setStep("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Erro desconhecido.");
      setStep("error");
    }
  };

  // ─── Tela de sucesso ──────────────────────────────────────────────────────
  if (step === "success") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-surface-50 p-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-10 w-10 text-emerald-500" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary">Pagamento confirmado!</h1>
          <p className="mt-2 text-surface-500">
            Sua estadia em <strong>{property.name}</strong> foi iniciada.
          </p>
          <p className="mt-1 text-sm text-surface-400">
            Pacote <strong>{pkg.name}</strong> ativo por {pkg.durationHours ?? 24}h.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 text-sm text-surface-500">
          <p>Os dispositivos foram ativados automaticamente.</p>
          <p>Boa estadia! 🏡</p>
        </div>
      </div>
    );
  }

  // ─── Tela de erro ─────────────────────────────────────────────────────────
  if (step === "error") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-surface-50 p-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-10 w-10 text-red-500" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary">Não foi possível confirmar</h1>
          <p className="mt-2 text-surface-500 max-w-xs">{errorMsg}</p>
        </div>
        <button
          onClick={() => setStep("info")}
          className="rounded-xl border border-surface-200 bg-white px-6 py-3 text-sm font-medium text-surface-700 hover:bg-surface-50"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  // ─── Tela principal ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-surface-50">
      {/* Header decorativo */}
      <div className={`bg-gradient-to-br ${theme.gradient} px-6 pb-16 pt-12 text-center`}>
        <span className="text-5xl">{theme.icon}</span>
        <h1 className="mt-4 text-3xl font-bold text-white">Pacote {pkg.name}</h1>
        <p className="mt-1 text-white/70 text-sm">
          {property.name}
        </p>
        <div className="mt-4 inline-flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">
            {formatCurrencyBRL(pkg.basePriceInCents)}
          </span>
          <span className="text-white/70 text-sm">/ dia</span>
        </div>
      </div>

      {/* Card flutuante */}
      <div className="mx-auto -mt-8 max-w-md px-4">
        <div className="rounded-2xl bg-white shadow-xl border border-surface-100 overflow-hidden">

          {/* Propriedade */}
          <div className="flex items-center gap-3 border-b border-surface-100 px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-100">
              <Home className="h-5 w-5 text-surface-500" />
            </div>
            <div>
              <p className="text-xs text-surface-500">Propriedade</p>
              <p className="text-sm font-semibold text-text-primary">{property.name}</p>
              <p className="text-xs text-surface-400">
                {property.address.street}, {property.address.neighborhood}
              </p>
            </div>
          </div>

          {/* Descrição */}
          <div className="px-5 py-4 border-b border-surface-100">
            <p className="text-sm text-surface-600 leading-relaxed">{pkg.description}</p>
          </div>

          {/* O que está incluído */}
          <div className="px-5 py-4 border-b border-surface-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-surface-400 mb-3">
              O que está incluído
            </p>
            <ul className="space-y-2">
              {pkg.allowedDeviceCategories.map((cat) => {
                const config = deviceCategoryLabels[cat];
                return (
                  <li key={cat} className="flex items-center gap-3">
                    <span className="text-lg">{config.emoji}</span>
                    <span className="text-sm text-text-primary">{config.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Detalhes */}
          <div className="grid grid-cols-2 divide-x divide-surface-100 border-b border-surface-100">
            <div className="flex items-center gap-2 px-5 py-4">
              <Clock className="h-4 w-4 text-surface-400" />
              <div>
                <p className="text-xs text-surface-400">Duração</p>
                <p className="text-sm font-semibold text-text-primary">
                  {pkg.durationHours ?? 24}h
                </p>
              </div>
            </div>
            {pkg.energyLimitKwh && (
              <div className="flex items-center gap-2 px-5 py-4">
                <Zap className="h-4 w-4 text-surface-400" />
                <div>
                  <p className="text-xs text-surface-400">Franquia</p>
                  <p className="text-sm font-semibold text-text-primary">
                    {pkg.energyLimitKwh} kWh
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Botão de confirmação */}
          <div className="px-5 py-5">
            <button
              onClick={handleConfirm}
              disabled={step === "confirming"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-600 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {step === "confirming" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Confirmando...
                </>
              ) : (
                <>
                  Confirmar pagamento
                  <ChevronRight className="h-5 w-5" />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-surface-400">
              Ao confirmar, os dispositivos serão ativados automaticamente.
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-surface-400 pb-8">
          Smart Rental Home · Estadia simulada para fins de demonstração
        </p>
      </div>
    </div>
  );
}
