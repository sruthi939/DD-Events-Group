import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, pass: string) => Promise<boolean>;
  register: (name: string, email: string, phone: string, pass: string) => Promise<boolean>;
  verifyOtp: (otp: string) => Promise<boolean>;
  forgotPassword: (email: string) => Promise<boolean>;
  resetPassword: (newPass: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updated: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'dd_events_auth_user';
const TOKEN_KEY = 'dd_events_token';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    const storedToken = localStorage.getItem(TOKEN_KEY);

    if (storedUser && storedToken) {
      try {
        setAuthState({
          user: JSON.parse(storedUser),
          token: storedToken,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(TOKEN_KEY);
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string): Promise<boolean> => {
    const mockUser: User = {
      id: 'u_' + Math.random().toString(36).substring(2, 9),
      name: email.split('@')[0].toUpperCase() || 'VIP Client',
      email,
      phone: '+1 (800) 555-0199',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    const mockToken = 'mock_jwt_token_' + Date.now();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    localStorage.setItem(TOKEN_KEY, mockToken);

    setAuthState({
      user: mockUser,
      token: mockToken,
      isAuthenticated: true,
      isLoading: false,
    });
    return true;
  };

  const register = async (name: string, email: string, phone: string): Promise<boolean> => {
    const tempUser: User = {
      id: 'u_' + Math.random().toString(36).substring(2, 9),
      name,
      email,
      phone,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    sessionStorage.setItem('pending_reg_user', JSON.stringify(tempUser));
    return true;
  };

  const verifyOtp = async (otp: string): Promise<boolean> => {
    if (otp.length !== 6) return false;
    const pending = sessionStorage.getItem('pending_reg_user');
    let user: User;

    if (pending) {
      user = JSON.parse(pending);
      sessionStorage.removeItem('pending_reg_user');
    } else {
      user = {
        id: 'u_verified',
        name: 'Alex Morgan',
        email: 'alex.m@example.com',
        phone: '+1 (800) 555-0199',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        role: 'user',
        createdAt: new Date().toISOString(),
      };
    }

    const mockToken = 'mock_jwt_token_' + Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    localStorage.setItem(TOKEN_KEY, mockToken);

    setAuthState({
      user,
      token: mockToken,
      isAuthenticated: true,
      isLoading: false,
    });
    return true;
  };

  const forgotPassword = async (email: string): Promise<boolean> => {
    sessionStorage.setItem('reset_email', email);
    return true;
  };

  const resetPassword = async (): Promise<boolean> => {
    sessionStorage.removeItem('reset_email');
    return true;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TOKEN_KEY);
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const updateProfile = (updated: Partial<User>) => {
    if (!authState.user) return;
    const newUser = { ...authState.user, ...updated };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setAuthState(prev => ({ ...prev, user: newUser }));
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        verifyOtp,
        forgotPassword,
        resetPassword,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
