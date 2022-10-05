import axios from 'axios';
import {apiKey, getResults} from '../shared/api-tools';

const baseUrl = 'https://api.nytimes.com/svc/movies/v2/reviews';

function requestCriticsPicks(){
    const url = `${baseUrl}/picks.json?api-key=${apiKey}`;
    return { url }
}

function fetchCriticsPicks(){
    const url = `${baseUrl}/picks.json?api-key=${apiKey}`;
    return axios(url)
            .then(getResults);
}

export default {
    requestCriticsPicks,
    fetchCriticsPicks
};