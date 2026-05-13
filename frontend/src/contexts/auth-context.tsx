"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  avatarInitials: string;
}

interface AuthContextValue {
  authenticatedUser: AuthenticatedUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => void;
}

interface LoginResult {
  success: boolean;
  errorMessage?: string;
}

// Mock credentials — substituir por chamada real ao backend no futuro
const MOCK_CREDENTIAL = {
  email: "admin@smartrental.com",
  password: "password123",
  user: {
    id: "user-001",
    name: "João da Silva",
    email: "admin@smartrental.com",
    avatarInitials: "JS",
  },
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticatedUser, setAuthenticatedUser] =
    useState<AuthenticatedUser | null>(null);

  const login = useCallback(
    async (email: string, password: string): Promise<LoginResult> => {
      // Simula latência de rede
      await new Promise((resolve) => setTimeout(resolve, 800));

      const credentialsAreValid =
        email === MOCK_CREDENTIAL.email &&
        password === MOCK_CREDENTIAL.password;

      if (!credentialsAreValid) {
        return {
          success: false,
          errorMessage: "E-mail ou senha incorretos. Tente novamente.",
        };
      }

      setAuthenticatedUser(MOCK_CREDENTIAL.user);
      return { success: true };
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
