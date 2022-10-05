import axios from 'axios';
import api from './api';
import * as actions from './actions';
import { getResults } from '../shared/api-tools';

function fetchMoviesCriticsPicks(){
    return function(dispatch){
        axios(api.requestCriticsPicks())
            .then(getResults)
            .then(toMovieReviews)
            .then(actions.setMoviesReviews)
            .then(dispatch);
    }
}

function toMovieReview(dto){
    return {
        id: dto.display_title,
        title: dto.display_title,
        author: dto.byline,
        url: dto.link.url,
        description: dto.summary_short,
        date: dto.published_date
    }
}

function toMovieReviews(list){
    return list.map(toMovieReview);
}

export { fetchMoviesCriticsPicks };