/**
 * api.ts — Camada de acesso à API do backend NestJS.
 *
 * Todas as funções lêem NEXT_PUBLIC_API_URL.
 * Por enquanto auth é baseada em userId (sem JWT).
 * Quando JWT for implementado, adicionar o header Authorization aqui.
 */

import type { Property } from "@/types/property";
import type { Device } from "@/types/device";
import type { RentalPackage } from "@/types/rental-package";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// ─── Helper ──────────────────────────────────────────────────────────────────

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    // Desabilita cache do Next para dados sempre frescos no dashboard
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(
      body?.message ?? `Erro ${res.status} ao acessar ${path}`
    );
  }

  return res.json() as Promise<T>;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

export interface LoginResponse {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export async function apiLogin(
  email: string,
  password: string
): Promise<LoginResponse> {
  return apiFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

// ─── Properties ──────────────────────────────────────────────────────────────

export async function getProperties(userId: number): Promise<Property[]> {
  return apiFetch<Property[]>(`/properties?userId=${userId}`);
}

export async function getProperty(
  id: number,
  userId: number
): Promise<Property> {
  return apiFetch<Property>(`/properties/${id}?userId=${userId}`);
}

// ─── Devices ─────────────────────────────────────────────────────────────────

export async function getDevices(propertyId: number): Promise<Device[]> {
  return apiFetch<Device[]>(`/devices?propertyId=${propertyId}`);
}

// ─── Rental Packages ─────────────────────────────────────────────────────────

export async function getPackages(propertyId: number): Promise<RentalPackage[]> {
  return apiFetch<RentalPackage[]>(`/rental-packages?propertyId=${propertyId}`);
}

export async function getPackage(id: number): Promise<RentalPackage> {
  return apiFetch<RentalPackage>(`/rental-packages/${id}`);
}

// ─── Stay Sessions ────────────────────────────────────────────────────────────

export async function startSessionFromPackage(packageId: number): Promise<unknown> {
  return apiFetch(`/stay-sessions/start-from-package/${packageId}`, {
    method: "POST",
  });
}
