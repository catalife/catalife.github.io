import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  role: "student" | "admin";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isAdmin: boolean;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

// Login is disabled. This is a static site (GitHub Pages) with no backend, so any
// credentials checked here would ship in the public JavaScript bundle. Re-enable
// login only once a real server-side auth provider is in place.
const STORAGE_KEY = "catalife_user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Clear any session saved by the old client-side login.
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Storage may be unavailable (private mode); nothing to clear.
    }
  }, []);

  const login = (_email: string, _password: string): boolean => false;

  const signup = (_name: string, _email: string, _password: string): boolean => false;

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      isAdmin: user?.role === "admin",
      isLoggedIn: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
