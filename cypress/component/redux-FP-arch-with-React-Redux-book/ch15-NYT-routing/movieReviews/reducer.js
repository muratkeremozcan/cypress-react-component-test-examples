import { handleActions } from 'redux-actions';
import * as actions from "./actions";

const initialState = [];

//updaters
function setMoviesReviews(state, action){
    return action.payload;
}

export default handleActions(
    {
      [actions.setMoviesReviews]: setMoviesReviews
    },
    initialState
);