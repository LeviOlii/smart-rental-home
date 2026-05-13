"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  FileBarChart2,
  LogOut,
  Building2,
} from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isAvailable: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    label: "Propriedades",
    href: "/properties",
    icon: Home,
    isAvailable: true,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    isAvailable: false,
  },
  {
    label: "Relatórios",
    href: "/reports",
    icon: FileBarChart2,
    isAvailable: false,
  },
];

export function AppSidebar() {
  const currentPathname = usePathname();
  const { authenticatedUser, logout } = useAuth();

  const isNavigationItemActive = (href: string) =>
    currentPathname.startsWith(href);

  return (
    <aside className="flex h-full w-[260px] flex-shrink-0 flex-col bg-surface-900 text-text-inverse">
      {/* Logo / Brand */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-surface-700">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500">
          <Building2 className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold tracking-wide text-white leading-none">
            Smart Rental
          </p>
          <p className="text-xs text-surface-400 mt-0.5">Gestão de Imóveis</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-surface-500">
          Menu
        </p>
        {navigationItems.map((item) => {
          const isActive = isNavigationItemActive(item.href);
          const IconComponent = item.icon;

          return (
            <div key={item.href}>
              {item.isAvailable ? (
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-brand-500 text-white shadow-sm"
                      : "text-surface-300 hover:bg-surface-800 hover:text-white"
                  )}
                >
                  <IconComponent
                    className={cn(
                      "h-4 w-4 flex-shrink-0 transition-colors",
                      isActive
                        ? "text-white"
                        : "text-surface-400 group-hover:text-brand-400"
                    )}
                  />
                  {item.label}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white opacity-75" />
                  )}
                </Link>
              ) : (
                <div
                  className="flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-surface-600"
                  title="Em breve"
                >
                  <IconComponent className="h-4 w-4 flex-shrink-0 text-surface-700" />
                  {item.label}
                  <span className="ml-auto rounded-full bg-surface-800 px-1.5 py-0.5 text-[10px] font-medium text-surface-500">
                    Em breve
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User info + Logout */}
      <div className="border-t border-surface-700 px-3 py-4">
        <div className="mb-3 flex items-center gap-3 rounded-lg bg-surface-800 px-3 py-2.5">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
            {authenticatedUser?.avatarInitials ?? "??"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              {authenticatedUser?.name ?? "Usuário"}
            </p>
            <p className="truncate text-xs text-surface-400">
              {authenticatedUser?.email ?? ""}
            </p>
          </div>
        </div>
        <button
          onClick={logout}
          className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-surface-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut className="h-4 w-4 flex-shrink-0 transition-colors group-hover:text-red-400" />
          Sair da conta
        </button>
      </div>
    </aside>
  );
}
