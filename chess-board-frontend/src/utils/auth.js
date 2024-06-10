import api from './api';

export const login = async (username, password) => {
    const response = await api.post('/auth/login', { username, password });
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response.data.user;
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};
