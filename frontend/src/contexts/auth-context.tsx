"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { apiLogin } from "@/lib/api";

interface AuthenticatedUser {
  id: number;
  name: string;
  email: string;
  avatarInitials: string;
}

interface AuthContextValue {
  authenticatedUser: AuthenticatedUser | null;
  isAuthenticated: boolean;
  /** ID numérico do usuário logado — usado nas chamadas à API */
  userId: number | null;
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => void;
}

interface LoginResult {
  success: boolean;
  errorMessage?: string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticatedUser, setAuthenticatedUser] =
    useState<AuthenticatedUser | null>(null);

  const login = useCallback(
    async (email: string, password: string): Promise<LoginResult> => {
      try {
        const data = await apiLogin(email, password);

        setAuthenticatedUser({
          id: data.id,
          name: data.name,
          email: data.email,
          avatarInitials: data.name
            .split(" ")
            .slice(0, 2)
            .map((n) => n[0].toUpperCase())
            .join(""),
        });

        return { success: true };
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Erro ao fazer login.";
        return { success: false, errorMessage: message };
      }
    },
    []
  );

  const logout = useCallback(() => {
    setAuthenticatedUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        isAuthenticated: authenticatedUser !== null,
        userId: authenticatedUser?.id ?? null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
