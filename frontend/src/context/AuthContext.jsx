import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const res = await axios.post("/api/auth/login", { email, password }, { withCredentials: true });
    setAccessToken(res.data.accessToken);
    setUser(res.data.user);
  };

  const register = async (email, password, language) => {
    const res = await axios.post("/api/auth/register", { email, password, language }, { withCredentials: true });
    setAccessToken(res.data.accessToken);
    setUser(res.data.user);
  };

  const logout = async () => {
    await axios.post("/api/auth/logout", {}, { withCredentials: true });
    setAccessToken(null);
    setUser(null);
  };

  const refreshAccessToken = async () => {
    try {
      const res = await axios.get("/api/auth/refresh", { withCredentials: true });
      setAccessToken(res.data.accessToken);
    } catch {
      setUser(null);
      setAccessToken(null);
    }
  };

  useEffect(() => {
    refreshAccessToken().finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, accessToken, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
