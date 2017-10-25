import axios from 'axios';

/**
 * Main API link
 *
 * @param params
 */
export function apiLink(params) {
    return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=a7a89c1ebd01e5010e5e1a445390b0ac&', params);
}