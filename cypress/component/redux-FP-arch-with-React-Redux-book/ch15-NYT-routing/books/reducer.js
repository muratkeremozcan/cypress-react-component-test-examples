import { handleActions } from 'redux-actions';
import * as actions from "./actions";

const initialState = Object.freeze({
    categories : [],
    bestBooks : { categoryName: '', list: [] }
});

//updaters
function setBooks(state, action){
    const bestBooks = action.payload;
    return {
        ...state,
        bestBooks
    }
}

function setBookCategories(state, action){
    const categories = action.payload;
    return {
        ...state,
        categories
    };
}

export default handleActions(
    {
      [actions.setBooks]: setBooks,
      [actions.setBookCategories]: setBookCategories  
    },
    initialState
);