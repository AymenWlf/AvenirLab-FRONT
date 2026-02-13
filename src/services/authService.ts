import api from '../config/api';
import { LoginResponse, RegisterResponse, User, ApiResponse } from '../types/auth';

class AuthService {
  async login(phone: string, password: string): Promise<LoginResponse> {
    try {
      const response = await api.post<any>('/api/login', {
        phone,
        password,
      });

      let token: string | null = null;
      let user: any;

      if (response.data.success && response.data.data) {
        token = response.data.data.token;
        user = response.data.data.user;
        
        if (!token) {
          throw new Error('Token JWT manquant dans la réponse');
        }
      } else if (response.data.token) {
        token = response.data.token;
        try {
          const userResponse = await api.get('/api/me', {
            headers: { Authorization: `Bearer ${token}` }
          });
          user = userResponse.data.data?.user || userResponse.data;
        } catch (userError) {
          throw new Error('Erreur lors de la récupération des données utilisateur');
        }
      } else {
        throw new Error('Format de réponse inattendu');
      }

      if (token) {
        localStorage.setItem('jwt_token', token);
      }
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      return {
        success: true,
        message: 'Connexion réussie',
        data: {
          user,
          token: token || ''
        }
      };
    } catch (error: any) {
      if (!error.response) {
        const errorMessage = error.message || '';
        const errorCode = error.code || '';
        
        if (errorMessage.includes('Network Error') || 
            errorMessage.includes('Failed to fetch') || 
            errorMessage.includes('Network request failed') ||
            errorCode === 'ECONNABORTED' || 
            errorCode === 'ERR_NETWORK' ||
            errorCode === 'ERR_INTERNET_DISCONNECTED') {
          throw new Error('Erreur de connexion au serveur. Vérifiez votre connexion internet et réessayez.');
        }
        
        if (errorCode === 'ETIMEDOUT' || errorMessage.includes('timeout')) {
          throw new Error('Le serveur met trop de temps à répondre. Veuillez réessayer.');
        }
        
        throw new Error('Erreur de connexion. Veuillez réessayer plus tard.');
      }
      
      let serverMessage = 'Numéro de téléphone ou mot de passe incorrect';
      
      if (error.response?.data) {
        if (error.response.data.message && typeof error.response.data.message === 'string') {
          serverMessage = error.response.data.message;
        }
        else if (error.response.data.error && typeof error.response.data.error === 'string') {
          serverMessage = error.response.data.error;
        }
        else if (error.response?.status === 401) {
          serverMessage = 'Numéro de téléphone ou mot de passe incorrect';
        }
      }
      
      throw new Error(serverMessage);
    }
  }

  async register(phone: string, password: string): Promise<RegisterResponse> {
    try {
      const response = await api.post<RegisterResponse>('/api/register', {
        phone,
        password,
      });

      if (response.data.success && response.data.data) {
        if (response.data.data.token) {
          localStorage.setItem('jwt_token', response.data.data.token);
        }
        if (response.data.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.data.user));
        }
      }

      return response.data;
    } catch (error: any) {
      if (!error.response) {
        const errorMessage = error.message || '';
        const errorCode = error.code || '';
        
        if (errorMessage.includes('Network Error') || 
            errorMessage.includes('Failed to fetch') || 
            errorMessage.includes('Network request failed') ||
            errorCode === 'ECONNABORTED' || 
            errorCode === 'ERR_NETWORK' ||
            errorCode === 'ERR_INTERNET_DISCONNECTED') {
          throw new Error('Erreur de connexion au serveur. Vérifiez votre connexion internet et réessayez.');
        }
        
        if (errorCode === 'ETIMEDOUT' || errorMessage.includes('timeout')) {
          throw new Error('Le serveur met trop de temps à répondre. Veuillez réessayer.');
        }
        
        throw new Error('Erreur de connexion. Veuillez réessayer plus tard.');
      }
      
      let serverMessage = 'Une erreur est survenue lors de l\'inscription';
      
      if (error.response?.status === 400) {
        serverMessage = error.response?.data?.message || 
                       error.response?.data?.error || 
                       'Les informations fournies sont invalides';
      } else if (error.response?.status === 409) {
        serverMessage = error.response?.data?.message || 
                       error.response?.data?.error || 
                       'Ce numéro de téléphone est déjà utilisé';
      } else if (error.response?.data?.message) {
        serverMessage = error.response.data.message;
      } else if (error.response?.data?.error) {
        serverMessage = error.response.data.error;
      }
      
      throw new Error(serverMessage);
    }
  }

  async getCurrentUser(): Promise<User> {
    try {
      const response = await api.get<ApiResponse<{ user: User }>>('/api/me');
      const user = response.data.data!.user;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur lors de la récupération des données utilisateur');
    }
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user');
    localStorage.removeItem('refresh_token');
  }

  getStoredToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  getStoredUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  isAuthenticated(): boolean {
    return !!this.getStoredToken();
  }

  isTokenExpired(): boolean {
    const token = this.getStoredToken();
    if (!token) return true;

    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        return true;
      }

      const payload = JSON.parse(atob(parts[1]));
      
      if (!payload.exp || payload.exp === 0) {
        return false;
      }
      
      const currentTime = Date.now() / 1000;
      return payload.exp < currentTime;
    } catch (error) {
      return true;
    }
  }

  async forgotPassword(email: string): Promise<ApiResponse<null>> {
    try {
      const response = await api.post<ApiResponse<null>>('/auth/forgot-password', {
        email,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur lors de l\'envoi de l\'email de récupération');
    }
  }

  async resetPassword(token: string, password: string): Promise<ApiResponse<null>> {
    try {
      const response = await api.post<ApiResponse<null>>('/auth/reset-password', {
        token,
        password,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur lors de la réinitialisation du mot de passe');
    }
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<ApiResponse<null>> {
    try {
      const response = await api.post<ApiResponse<null>>('/auth/change-password', {
        currentPassword,
        newPassword,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur lors du changement de mot de passe');
    }
  }

  async verifyEmail(token: string): Promise<ApiResponse<null>> {
    try {
      const response = await api.post<ApiResponse<null>>('/auth/verify-email', {
        token,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur lors de la vérification de l\'email');
    }
  }

  async resendVerificationEmail(): Promise<ApiResponse<null>> {
    try {
      const response = await api.post<ApiResponse<null>>('/auth/resend-verification');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur lors de l\'envoi de l\'email de vérification');
    }
  }

  async updateLanguage(language: string): Promise<ApiResponse<{ preferredLanguage: string }>> {
    try {
      const response = await api.post<ApiResponse<{ preferredLanguage: string }>>('/auth/update-language', {
        language,
      });
      
      const storedUser = this.getStoredUser();
      if (storedUser) {
        storedUser.preferredLanguage = language;
        localStorage.setItem('user', JSON.stringify(storedUser));
      }
      
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur lors de la mise à jour de la langue');
    }
  }
}

const authService = new AuthService();
export default authService;
