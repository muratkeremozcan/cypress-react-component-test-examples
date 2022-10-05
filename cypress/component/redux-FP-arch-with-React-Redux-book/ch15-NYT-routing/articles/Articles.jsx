import React from 'react';
import { Link } from 'react-router-dom';
import { fetchMostPopularArticles } from './operations';
import connect from '../shared/connectWithOnLoad';
import ArticleItem from './ArticleItem'

function Articles({articles}){
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <h2>Articles</h2>
            <div>
                {articles.map(article => 
                    <ArticleItem 
                     article={article} 
                     key={article.id} />)}
            </div>
        </div>
    )
}

function mapState({articles}){
    return {
        articles
    }
}

export default connect(
    mapState,
    null,
    fetchMostPopularArticles
)(Articles);