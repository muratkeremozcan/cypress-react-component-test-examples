import axios from 'axios';

const apiKey = 'qkUtGI3wXzsKeKFiPghbSPJq6U2kMAo2';
const baseUrl = 'https://api.nytimes.com/svc/books/v3/lists';

function getResults(response){
    return (response && response.data)? response.data.results : response;
}

function fetchBookCategories(){
    const url = `${baseUrl}/names.json?api-key=${apiKey}`;
    return axios(url)
            .then(getResults);
}

function fetchBooks(category){
    const url = 
    `${baseUrl}/current/${category}.json?api-key=${apiKey}`;
    return axios(url)
            .then(getResults)
}

export default {
    fetchBookCategories,
    fetchBooks
};