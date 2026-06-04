"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  CheckCircle,
  Zap,
  Clock,
  AlertTriangle,
  Loader2,
  Home,
  ChevronRight,
} from "lucide-react";
import { getPackage, startSessionFromPackage } from "@/lib/api";
import type { RentalPackage } from "@/types/rental-package";

const deviceCategoryLabels: Record<string, { label: string; emoji: string }> = {
  circuit_breaker: { label: "Energia básica", emoji: "⚡" },
  lighting: { label: "Iluminação", emoji: "💡" },
  air_conditioner: { label: "Ar-condicionado", emoji: "❄️" },
  water_heater: { label: "Chuveiro elétrico", emoji: "🚿" },
  smart_lock: { label: "Fechadura smart", emoji: "🔐" },
  sensor: { label: "Sensores", emoji: "📡" },
  other: { label: "Outros dispositivos", emoji: "🔧" },
};

const packageThemes: Record<string, { gradient: string; icon: string }> = {
  Básico: { gradient: "from-slate-600 to-slate-800", icon: "🏠" },
  Plus: { gradient: "from-blue-500 to-blue-700", icon: "⚡" },
  Gold: { gradient: "from-amber-400 to-amber-600", icon: "👑" },
};

type Step = "loading" | "info" | "confirming" | "success" | "error" | "not_found";

export default function AccessPage() {
  const params = useParams<{ packageId: string }>();
  const [step, setStep] = useState<Step>("loading");
  const [pkg, setPkg] = useState<RentalPackage | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Busca o pacote pelo ID numérico real
  useEffect(() => {
    const id = parseInt(params.packageId, 10);
    if (isNaN(id)) {
      setStep("not_found");
      return;
    }

    getPackage(id)
      .then((data) => {
        setPkg(data);
        setStep("info");
      })
      .catch(() => setStep("not_found"));
  }, [params.packageId]);

  // ─── Confirmar pagamento ────────────────────────────────────────────────────
  const handleConfirm = async () => {
    if (!pkg) return;
    setStep("confirming");

    try {
      await startSessionFromPackage(pkg.id);
      setStep("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Erro desconhecido.");
      setStep("error");
    }
  };

  // ─── Loading ────────────────────────────────────────────────────────────────
  if (step === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-50">
        <Loader2 className="h-8 w-8 animate-spin text-brand-500" />
      </div>
    );
  }

  // ─── Não encontrado ─────────────────────────────────────────────────────────
  if (step === "not_found" || !pkg) {
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

  // ─── Sucesso ────────────────────────────────────────────────────────────────
  if (step === "success") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-surface-50 p-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-10 w-10 text-emerald-500" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary">Pagamento confirmado!</h1>
          <p className="mt-2 text-surface-500">
            Sua estadia — pacote <strong>{pkg.name}</strong> — foi iniciada.
          </p>
          {pkg.durationHours && (
            <p className="mt-1 text-sm text-surface-400">
              Duração: {pkg.durationHours}h
            </p>
          )}
        </div>
        <div className="flex flex-col items-center gap-2 text-sm text-surface-500">
          <p>Os dispositivos foram ativados automaticamente.</p>
          <p>Boa estadia! 🏡</p>
        </div>
      </div>
    );
  }

  // ─── Erro ───────────────────────────────────────────────────────────────────
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

  // ─── Tela principal ──────────────────────────────────────────────────────────
  const theme = packageThemes[pkg.name] ?? packageThemes["Básico"];

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Header decorativo */}
      <div className={`bg-gradient-to-br ${theme.gradient} px-6 pb-16 pt-12 text-center`}>
        <span className="text-5xl">{theme.icon}</span>
        <h1 className="mt-4 text-3xl font-bold text-white">Pacote {pkg.name}</h1>
        <div className="mt-4 inline-flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">
            R$ {pkg.basePrice.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-white/70 text-sm">/ dia</span>
        </div>
      </div>

      {/* Card flutuante */}
      <div className="mx-auto -mt-8 max-w-md px-4">
        <div className="rounded-2xl bg-white shadow-xl border border-surface-100 overflow-hidden">

          {/* Localização */}
          <div className="flex items-center gap-3 border-b border-surface-100 px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-100">
              <Home className="h-5 w-5 text-surface-500" />
            </div>
            <div>
              <p className="text-xs text-surface-500">Pacote ID</p>
              <p className="text-sm font-semibold text-text-primary">#{pkg.id} — {pkg.name}</p>
            </div>
          </div>

          {/* O que está incluído */}
          <div className="px-5 py-4 border-b border-surface-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-surface-400 mb-3">
              O que está incluído
            </p>
            <ul className="space-y-2">
              {pkg.allowedDeviceCategories.map((cat) => {
                const config = deviceCategoryLabels[cat] ?? { label: cat, emoji: "🔧" };
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

          {/* Botão */}
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
          Smart Rental Home · Sistema de gestão de imóveis
        </p>
      </div>
    </div>
  );
}
