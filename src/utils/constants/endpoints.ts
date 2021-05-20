import { objectToParams } from '../format';

const API_URL = 'https://api.spotify.com/v1';

export const personalizedRecommendationsURL = (params: Record<string, unknown> = {}) => {
    const queryString = objectToParams(params);
    return `${API_URL}/views/personalized-recommendations${queryString}`;
}