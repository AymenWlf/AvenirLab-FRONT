import axios from 'axios';

// Configuration de base d'axios
// En développement: localhost:8002
// En production: https://e-tawjihi.ma
const getApiBaseUrl = () => {
  // Si VITE_API_BASE_URL est défini explicitement, l'utiliser
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }

  // En développement (mode dev de Vite)
  if (import.meta.env.DEV) {
    return 'http://localhost:8002';
  }

  // En production
  return 'https://apinew.e-tawjihi.ma';
};

const API_BASE_URL = getApiBaseUrl();

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token JWT aux requêtes
api.interceptors.request.use(
  (config) => {
    // Liste des endpoints publics qui ne nécessitent pas de token
    const publicEndpoints = ['/api/login', '/api/register'];

    // Vérifier si l'endpoint est public
    const isPublicEndpoint = publicEndpoints.some(endpoint =>
      config.url?.includes(endpoint)
    );

    // Ajouter le token seulement si l'endpoint n'est pas public
    if (!isPublicEndpoint) {
      const token = localStorage.getItem('jwt_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les réponses et les erreurs
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Vérifier si le token est expiré
      const token = localStorage.getItem('jwt_token');
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const currentTime = Date.now() / 1000;

          if (payload.exp && payload.exp > 0 && payload.exp < currentTime) {
            // Token expiré, nettoyer
            localStorage.removeItem('jwt_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
          }
        } catch (parseError) {
          // Token invalide, nettoyer
          localStorage.removeItem('jwt_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
export { API_BASE_URL };
