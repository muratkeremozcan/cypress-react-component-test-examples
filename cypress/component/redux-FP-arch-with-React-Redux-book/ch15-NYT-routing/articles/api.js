import axios from 'axios';
import {apiKey, getResults} from '../shared/api-tools';

const baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

function fetchMostPopular(){
    const url = `${baseUrl}/1.json?api-key=${apiKey}`;
    return axios(url)
            .then(getResults);
}

function requestMostPopular(){
    const url = `${baseUrl}/1.json?api-key=${apiKey}`;
    return { url };
}

export default {
    fetchMostPopular,
    requestMostPopular
};