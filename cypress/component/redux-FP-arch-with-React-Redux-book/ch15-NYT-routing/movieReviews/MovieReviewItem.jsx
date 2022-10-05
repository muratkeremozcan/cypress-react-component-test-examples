import React from 'react';

function MovieReviewItem({movie}){
    return (
        <div>
            <div>          
                <a 
                    href={movie.url} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        {movie.title}
                </a>
            </div>
            <div>{movie.author}</div>
            <div>{movie.description}</div>
            <div>{movie.date}</div>
        </div>
    )
}

export default MovieReviewItem

