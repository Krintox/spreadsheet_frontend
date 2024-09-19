import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as loginApi, logout as logoutApi } from '../api/authApi';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    loginApi();
  };

  const logout = () => {
    setUser(null);
    logoutApi();
  };

  useEffect(() => {
    // Here you would load the user from local storage or session on component mount
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
