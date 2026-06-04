"use client";

import { useState, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Download, Link2, Check, Zap } from "lucide-react";
import type { RentalPackage } from "@/types/rental-package";
import { cn } from "@/lib/utils";

// ─── Config visual por nome de pacote ────────────────────────────────────────
const packageVisualConfig: Record<
  string,
  {
    gradient: string;
    badge: string;
    badgeBg: string;
    icon: string;
    ring: string;
  }
> = {
  Básico: {
    gradient: "from-slate-500 to-slate-700",
    badge: "text-slate-700",
    badgeBg: "bg-slate-100 border-slate-200",
    icon: "🏠",
    ring: "ring-slate-200",
  },
  Plus: {
    gradient: "from-brand-500 to-brand-700",
    badge: "text-brand-700",
    badgeBg: "bg-brand-50 border-brand-200",
    icon: "⚡",
    ring: "ring-brand-200",
  },
  Gold: {
    gradient: "from-amber-400 to-amber-600",
    badge: "text-amber-700",
    badgeBg: "bg-amber-50 border-amber-200",
    icon: "👑",
    ring: "ring-amber-200",
  },
};

const deviceCategoryLabels: Record<string, string> = {
  circuit_breaker: "Energia básica",
  lighting: "Iluminação",
  air_conditioner: "Ar-condicionado",
  water_heater: "Chuveiro elétrico",
  smart_lock: "Fechadura smart",
  sensor: "Sensores",
  other: "Outros dispositivos",
};

interface QRCodeCardProps {
  pkg: RentalPackage;
}

export function QRCodeCard({ pkg }: QRCodeCardProps) {
  const [copied, setCopied] = useState(false);

  const accessUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/access/${pkg.id}`
      : `/access/${pkg.id}`;

  const visual =
    packageVisualConfig[pkg.name] ?? packageVisualConfig["Básico"];

  // ─── Copiar link ────────────────────────────────────────────────────────────
  const handleCopyLink = useCallback(async () => {
    await navigator.clipboard.writeText(accessUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [accessUrl]);

  // ─── Download QR como PNG ───────────────────────────────────────────────────
  const handleDownload = useCallback(() => {
    const svg = document.getElementById(`qr-${pkg.id}`) as SVGElement | null;
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    const size = 300;
    canvas.width = size;
    canvas.height = size;

    img.onload = () => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);

      const link = document.createElement("a");
      link.download = `qr-${pkg.name.toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  }, [pkg.id, pkg.name]);

  return (
    <div
      className={cn(
        "group flex flex-col rounded-2xl border bg-white shadow-sm overflow-hidden",
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
        "ring-1",
        visual.ring
      )}
    >
      {/* Header gradient */}
      <div className={cn("flex items-center justify-between px-5 py-4 bg-linear-to-r", visual.gradient)}>
        <div className="flex items-center gap-2">
          <span className="text-xl">{visual.icon}</span>
          <div>
            <p className="text-xs font-medium text-white/70">Pacote</p>
            <h3 className="text-lg font-bold text-white leading-none">{pkg.name}</h3>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-white/70">por dia</p>
          <p className="text-xl font-bold text-white">
            R$ {pkg.basePrice.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5">
        {/* QR Code */}
        <div className="flex justify-center">
          <div className="rounded-xl border border-surface-200 bg-white p-3 shadow-inner">
            <QRCodeSVG
              id={`qr-${pkg.id}`}
              value={accessUrl}
              size={160}
              bgColor="#ffffff"
              fgColor="#1e293b"
              level="M"
              includeMargin={false}
            />
          </div>
        </div>

        {/* Duração e franquia no topo */}
        {pkg.durationHours && (
          <p className="text-center text-xs text-surface-400">
            {pkg.durationHours}h de estadia
            {pkg.energyLimitKwh ? ` · ${pkg.energyLimitKwh} kWh de franquia` : ""}
          </p>
        )}

        {/* Dispositivos liberados */}
        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide">
            Inclui
          </p>
          <ul className="space-y-1">
            {pkg.allowedDeviceCategories.map((cat) => (
              <li key={cat} className="flex items-center gap-2 text-xs text-surface-700">
                <Zap className="h-3 w-3 shrink-0 text-brand-400" />
                {deviceCategoryLabels[cat as keyof typeof deviceCategoryLabels] ?? cat}
              </li>
            ))}
          </ul>
        </div>



        {/* Ações */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-surface-200 bg-surface-50 py-2.5 text-xs font-medium text-surface-600 transition-all hover:border-surface-300 hover:bg-surface-100 hover:text-surface-800"
          >
            <Download className="h-3.5 w-3.5" />
            Baixar QR
          </button>
          <button
            onClick={handleCopyLink}
            className={cn(
              "flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-medium transition-all duration-200",
              copied
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-surface-200 bg-surface-50 text-surface-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
            )}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copiado!
              </>
            ) : (
              <>
                <Link2 className="h-3.5 w-3.5" />
                Copiar link
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
