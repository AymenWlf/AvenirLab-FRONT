import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType, User } from '../types/auth';
import authService from '../services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = (): void => {
    authService.logout();
    setCurrentUser(null);
    setToken(null);
  };

  useEffect(() => {
    const storedToken = authService.getStoredToken();
    const storedUser = authService.getStoredUser();

    if (storedToken && storedUser) {
      const isExpired = authService.isTokenExpired();
      
      if (isExpired) {
        authService.logout();
        setCurrentUser(null);
        setToken(null);
        setIsLoading(false);
        return;
      }

      setToken(storedToken);
      setCurrentUser(storedUser);
      setIsLoading(false);
      
      setTimeout(() => {
        authService.getCurrentUser()
          .then((user) => {
            setCurrentUser(user);
            localStorage.setItem('user', JSON.stringify(user));
          })
          .catch((error) => {
            const isAuthError = error.response?.status === 401 || error.response?.status === 403;
            if (isAuthError && authService.isTokenExpired()) {
              authService.logout();
              setCurrentUser(null);
              setToken(null);
            }
          });
      }, 500);
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (phone: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await authService.login(phone, password);
      
      if (response.success && response.data) {
        if (response.data.user) {
          setCurrentUser(response.data.user);
        }
        if (response.data.token) {
          setToken(response.data.token);
        }
        const storedUser = authService.getStoredUser();
        const storedToken = authService.getStoredToken();
        if (storedUser && !response.data.user) {
          setCurrentUser(storedUser);
        }
        if (storedToken && !response.data.token) {
          setToken(storedToken);
        }
      } else {
        throw new Error('Réponse invalide du serveur');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (phone: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await authService.register(phone, password);
      
      if (response.success && response.data) {
        if (response.data.user) {
          setCurrentUser(response.data.user);
        }
        if (response.data.token) {
          setToken(response.data.token);
        }
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email: string): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.forgotPassword(email);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (token: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.resetPassword(token, password);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.changePassword(currentPassword, newPassword);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmail = async (token: string): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.verifyEmail(token);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resendVerificationEmail = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.resendVerificationEmail();
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateLanguage = async (language: string): Promise<void> => {
    try {
      await authService.updateLanguage(language);
      if (currentUser) {
        const updatedUser = { ...currentUser, preferredLanguage: language };
        setCurrentUser(updatedUser);
      }
    } catch (error) {
      throw error;
    }
  };

  const value: AuthContextType = {
    currentUser,
    user: currentUser,
    token,
    isAuthenticated: !!currentUser && !!token,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    changePassword,
    verifyEmail,
    resendVerificationEmail,
    updateLanguage,
    setCurrentUser,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
