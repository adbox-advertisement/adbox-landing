import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import ApiService from "@/helpers/api.service";
import { Storage } from "@/helpers/local.storage";
import { PUBLISHER_DASHBOARD_URL } from "@/helpers/constants";
interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  loading: boolean;
  error: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    setError("");

    try {
      const response = await ApiService.post_api("/auth/publisher/signin", {
        email,
        password,
      });
      const data = response.data;
      if (data?.token) {
        Storage.saveToken(data.token);
        window.location.href = `${PUBLISHER_DASHBOARD_URL}?token=${data.token}`;
        // window.location.href = `http://localhost:5174?token=${data.token}`;
      } else {
        setError(data?.message || "Login failed");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const signup = async (
    email: string,
    password: string,
    name: string
  ): Promise<void> => {
    setLoading(true);
    setError("");

    try {
      const response = await ApiService.post_api("/signup", {
        email,
        password,
        name,
      });
      const data = response.data;

      if (data?.token) {
        Storage.saveToken(data.token);
        window.location.href = `https://dashboard.adboxgh.com?token=${data.token}`;
      } else {
        setError(data?.message || "Signup failed");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ login, signup, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
