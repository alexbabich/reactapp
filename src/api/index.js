import axios from 'axios';

/**
 * Main API link
 *
 * @param params
 */
export function apiLink(params) {
    return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=a7a89c1ebd01e5010e5e1a445390b0ac&' + params);
}

export function actor(params) {
    return axios.get('https://api.themoviedb.org/3/search/movie?api_key=a7a89c1ebd01e5010e5e1a445390b0ac&query='+ params)
}

export function filmLink(params) {
    return axios.get('https://api.themoviedb.org/3/movie/'+params+'?api_key=a7a89c1ebd01e5010e5e1a445390b0ac')
}