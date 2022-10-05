import React from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesCriticsPicks } from './operations';
import connect from '../shared/connectWithOnLoad';
import MovieReviewItem from './MovieReviewItem'

function MovieReviews({movieReviews}){
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <h2>Movie Reviews</h2>
            <div>
                {movieReviews.map(movie => 
                    <MovieReviewItem 
                        movie={movie} 
                        key={movie.id} />)}
            </div>
        </div>
    )
}

function mapState({movieReviews}){
    return {
        movieReviews
    }
}

export default connect(
    mapState,
    null,
    fetchMoviesCriticsPicks
)(MovieReviews);