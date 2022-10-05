import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem({category}){
    return (
        <div>
            <Link 
             to={`/books/${category.id}/`}>
                {category.name}
            </Link>
        </div>
    )
}

export default CategoryItem;