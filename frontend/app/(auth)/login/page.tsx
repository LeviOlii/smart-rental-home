"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Building2, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";

interface LoginFormFields {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    defaultValues: { email: "", password: "" },
  });

  const onValidSubmit = async (formData: LoginFormFields) => {
    setLoginErrorMessage(null);
    const result = await login(formData.email, formData.password);
    if (result.success) {
      router.push("/properties");
    } else {
      setLoginErrorMessage(result.errorMessage ?? "Erro ao fazer login.");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-surface-900">
      {/* Gradient blobs decorativos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full bg-brand-700/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      {/* Painel esquerdo — branding */}
      <div className="relative hidden flex-col justify-between px-16 py-12 lg:flex lg:flex-1">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 shadow-lg shadow-brand-500/30">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Smart Rental Home
          </span>
        </div>

        {/* Hero */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-white">
            Gestão inteligente
            <br />
            <span className="text-brand-400">dos seus imóveis</span>
          </h1>
          <p className="max-w-sm text-lg leading-relaxed text-surface-400">
            Monitore consumo de energia, gerencie dispositivos e acompanhe suas
            propriedades em tempo real.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Monitoramento em tempo real",
              "Múltiplas propriedades",
              "Relatórios detalhados",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm text-brand-300"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-surface-600">
          © {new Date().getFullYear()} Smart Rental Home. Todos os direitos reservados.
        </p>
      </div>

      {/* Painel direito — formulário */}
      <div className="relative z-10 flex w-full items-center justify-center px-6 py-12 lg:w-[480px] lg:flex-shrink-0">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-white/10 bg-surface-800/80 p-8 shadow-2xl backdrop-blur-xl">

            {/* Logo mobile */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Smart Rental Home</span>
            </div>

            {/* Cabeçalho */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Bem-vindo de volta</h2>
              <p className="mt-1.5 text-sm text-surface-400">
                Entre com suas credenciais para acessar a plataforma
              </p>
            </div>

            {/* Erro de credenciais */}
            {loginErrorMessage && (
              <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                {loginErrorMessage}
              </div>
            )}

            {/* Formulário */}
            <form onSubmit={handleSubmit(onValidSubmit)} className="space-y-5" noValidate>

              {/* E-mail */}
              <div className="space-y-1.5">
                <label htmlFor="email-input" className="block text-sm font-medium text-surface-300">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-500" />
                  <input
                    id="email-input"
                    type="email"
                    autoComplete="email"
                    placeholder="seu@email.com"
                    {...register("email", {
                      required: "O e-mail é obrigatório.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Informe um e-mail válido.",
                      },
                    })}
                    className={cn(
                      "w-full rounded-xl border bg-surface-700/60 py-3 pl-10 pr-4 text-sm text-white placeholder-surface-500 outline-none transition-all duration-200",
                      errors.email
                        ? "border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                        : "border-surface-600 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    )}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Senha */}
              <div className="space-y-1.5">
                <label htmlFor="password-input" className="block text-sm font-medium text-surface-300">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-500" />
                  <input
                    id="password-input"
                    type={isPasswordVisible ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "A senha é obrigatória.",
                      minLength: {
                        value: 6,
                        message: "A senha deve ter ao menos 6 caracteres.",
                      },
                    })}
                    className={cn(
                      "w-full rounded-xl border bg-surface-700/60 py-3 pl-10 pr-11 text-sm text-white placeholder-surface-500 outline-none transition-all duration-200",
                      errors.password
                        ? "border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                        : "border-surface-600 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-500 transition-colors hover:text-surface-300"
                    aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {isPasswordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-400">{errors.password.message}</p>
                )}
              </div>

              {/* Botão */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold",
                  "bg-brand-500 text-white shadow-lg shadow-brand-500/25",
                  "transition-all duration-200 hover:bg-brand-600 hover:shadow-brand-600/30",
                  "disabled:cursor-not-allowed disabled:opacity-60"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  "Entrar na plataforma"
                )}
              </button>
            </form>

            {/* Dica de credenciais demo */}
            <div className="mt-6 rounded-xl border border-surface-700 bg-surface-700/30 p-3">
              <p className="text-center text-xs text-surface-500">
                <span className="font-medium text-surface-400">Demo: </span>
                admin@smartrental.com · password123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
