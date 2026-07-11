import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined); //global context to hold authentication data 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => { //initializing the user
    try {
      const storedUser = localStorage.getItem('auth_user');
      const storedToken = localStorage.getItem('auth_token');
      
      if (storedUser && storedToken) {
        return JSON.parse(storedUser);
      }
    } catch (error) { //error handling
      console.error("Failed to parse initialized auth session:", error);
      localStorage.removeItem('auth_user');
      localStorage.removeItem('auth_token');
    }
    return null;
  });

  const isAuthenticated = !!user;

  // Login function 
  const login = (token, userData) => {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_user', JSON.stringify(userData));
    setUser(userData);
  };

  // Registration function
  const register = (token, userData) => {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_user', JSON.stringify(userData));
    setUser(userData);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};