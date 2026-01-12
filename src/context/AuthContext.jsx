import { createContext, useContext, useEffect, useState } from "react";
import { login as loginAPI } from "../api/auth.api";
import { getUserProfile } from "../api/user.api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("auth_token");

  // Load user on app start if token exists
  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await getUserProfile();
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem("auth_token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  // Login
  const login = async (email, password) => {
    const res = await loginAPI(email, password);
    localStorage.setItem("auth_token", res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
