import api from '../utils/api';

export const getTopPlayers = async () => {
    const response = await api.get('/top-players');
    return response.data;
};

export const getPlayerRatingHistory = async (username) => {
    const response = await api.get(`/player/${username}/rating-history`);
    return response.data;
};
