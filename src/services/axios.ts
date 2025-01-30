import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rest-api-alunos.vercel.app',
});

api.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem('authData');
    if (authData) {
      try {
        const { token } = JSON.parse(authData);
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Erro ao analisar authData do localStorage:', error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
