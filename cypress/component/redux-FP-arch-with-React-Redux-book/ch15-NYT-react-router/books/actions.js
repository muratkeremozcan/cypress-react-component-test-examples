import { createAction } from 'redux-actions';

const setBookCategories = createAction('SET_BOOK_CATEGORIES');
const setBooks = createAction('SET_BOOKS');

export {
    setBookCategories,
    setBooks
};
