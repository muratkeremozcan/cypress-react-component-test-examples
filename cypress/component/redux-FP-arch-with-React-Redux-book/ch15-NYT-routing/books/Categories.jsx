import React from 'react';
import { Link } from 'react-router-dom';
import connect from '../shared/connectWithOnLoad';
import CategoryItem from './CategoryItem';
import { fetchBookCategories } from './operations';

function Categories({categories}){
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <h2>Categories</h2>
            <div>
                {categories.map(category => 
                    <CategoryItem 
                     category={category} 
                     key={category.id} />)}
            </div>
        </div>
    )
}

function mapState({books}){
    return {
        categories: books.categories
    }
}

export default connect(
    mapState,
    null,
    fetchBookCategories
)(Categories);