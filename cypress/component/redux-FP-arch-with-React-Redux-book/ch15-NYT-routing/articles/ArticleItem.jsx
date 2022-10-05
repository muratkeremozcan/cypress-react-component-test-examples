import React from 'react';

function ArticleItem({article}){
    return (
        <div>
            <div>          
                <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        {article.title}
                </a>
            </div>
            <div>{article.author}</div>
            <div>{article.date}</div>
        </div>
    )
}

export default ArticleItem