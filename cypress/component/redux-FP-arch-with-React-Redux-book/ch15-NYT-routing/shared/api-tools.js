const apiKey = 'qkUtGI3wXzsKeKFiPghbSPJq6U2kMAo2';

function getResults(response){
    return (response && response.data)? response.data.results : response;
}

export {
    apiKey,
    getResults
};