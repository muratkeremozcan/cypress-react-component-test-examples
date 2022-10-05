import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div>
            <h2>NYT App</h2>
            <div><Link to="/books/">Books Best Sellers</Link></div>
            <div><Link to="/articles/">Most Popular Articles</Link></div>
            <div><Link to="/moviereviews/">Movie Reviews</Link></div>
        </div>
    )
}

export default Home;