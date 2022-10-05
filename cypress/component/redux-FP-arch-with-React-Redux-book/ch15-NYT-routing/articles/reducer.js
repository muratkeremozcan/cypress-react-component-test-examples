import { handleActions } from 'redux-actions';
import * as actions from "./actions";

const initialState = [];

//updaters
function setArticles(state, action){
    const articles = action.payload;
    return articles;
}

export default handleActions(
    {
      [actions.setArticles]: setArticles,
    },
    initialState
);