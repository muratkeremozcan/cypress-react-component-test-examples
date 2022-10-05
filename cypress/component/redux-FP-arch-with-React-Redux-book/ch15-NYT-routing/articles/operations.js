import axios from 'axios';
import api from "./api";
import * as actions from './actions';
import { getResults } from '../shared/api-tools';

function fetchMostPopularArticles(){
    return function(dispatch){
        axios(api.requestMostPopular())
            .then(getResults)
            .then(toArticles)
            .then(actions.setArticles)
            .then(dispatch);
    }
}

function toArticle(dto){
    return {
        id: dto.id,
        title: dto.title,
        author: dto.byline,
        url: dto.url,
        date: dto.published_date
    }
}

function toArticles(list){
    return list.map(toArticle);
}

export { fetchMostPopularArticles };