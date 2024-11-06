// src/contexts/AuthContext.jsx
import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    // For testing purposes, we'll assign roles based on username
    console.log('Login attempted with:', credentials);
    if (credentials.username && credentials.password) {
      let role = 'employee'; // default role

      // Assign roles based on username for testing
      if (credentials.username.includes('admin')) {
        role = 'admin';
      } else if (credentials.username.includes('manager')) {
        role = 'manager';
      }

      const mockUser = {
        id: 1,
        username: credentials.username,
        role: role
      };
      setUser(mockUser);
      return mockUser;
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};