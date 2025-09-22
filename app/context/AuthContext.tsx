"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
} | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Provides authentication context to its children components.
 * It manages the user state and provides functions for login, register, and logout.
 * This is a mock implementation and does not perform real authentication.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  const login = async (email: string, password: string) => {
    // Mock login - will be replaced with actual authentication
    setUser({
      id: "1",
      name: "Demo User",
      email: email,
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // Mock registration - will be replaced with actual authentication
    setUser({
      id: "1",
      name: name,
      email: email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * A custom hook to access the authentication context.
 * It ensures that the hook is used within an AuthProvider.
 * It provides access to the user object and authentication functions.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
