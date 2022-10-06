import { combineReducers } from 'redux';
import listReducer from './reducers/listReducer';
import searchReducer from './reducers/searchReducer';

export default combineReducers({
  cities: listReducer,
  cityName: searchReducer
})