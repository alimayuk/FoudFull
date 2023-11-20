import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post("auth/login", inputs);
      setCurrentUser(res.data);
    } catch (error) {
      // Hata durumunu ele al, kullanıcıyı uygun şekilde bilgilendir veya işlemleri geri al.
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post("auth/logout");
        localStorage.removeItem("user");
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
