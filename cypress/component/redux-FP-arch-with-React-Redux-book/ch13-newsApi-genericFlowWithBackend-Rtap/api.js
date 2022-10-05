import axios from 'axios'

const baseUrl = 'https://hacker-news.firebaseio.com/v0'

const getData = (request) => request.data

export const fetchTopStoriesIds = () => axios.get(`${baseUrl}/topstories.json`).then(getData)

export const fetchStory = (id) => axios.get(`${baseUrl}/item/${id}.json`).then(getData)

// export default { fetchTopStoriesIds, fetchStory }
