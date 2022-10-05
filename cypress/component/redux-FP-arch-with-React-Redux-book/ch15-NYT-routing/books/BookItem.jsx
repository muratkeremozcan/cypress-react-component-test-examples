import React from 'react';

function BookItem({book}){
    return (
        <div >
            <div>{book.title}</div>
            <div>{book.author}</div>
        </div>
    )
}

export default BookItem;