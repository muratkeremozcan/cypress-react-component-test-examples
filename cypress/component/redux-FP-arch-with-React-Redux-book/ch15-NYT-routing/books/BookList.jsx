import React from 'react';
import { connect } from 'react-redux';
import BookItem from './BookItem'

function BookList({ books }){
    return (
        <div>
          <h2>{books.categoryName}</h2>
            <div>
                {books.list.map(book => 
                    <BookItem 
                     book={book}
                     key={book.isbn} />)}
            </div>
        </div>
    )
    
}

function mapState({books}){
    return {
        books: books.bestBooks
    }
}

export default connect(mapState)(BookList);