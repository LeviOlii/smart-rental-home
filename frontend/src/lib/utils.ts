import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind CSS classes without conflicts.
 * Combines clsx for conditional classes and tailwind-merge for deduplication.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a value in cents to Brazilian Real currency string.
 * @example formatCurrencyBRL(380000) → "R$ 3.800,00"
 */
export function formatCurrencyBRL(valueInCents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valueInCents / 100);
}

/**
 * Returns the full formatted address string from an address object.
 */
export function formatFullAddress(address: {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}): string {
  return `${address.street}, ${address.neighborhood} — ${address.city}/${address.state}`;
}
