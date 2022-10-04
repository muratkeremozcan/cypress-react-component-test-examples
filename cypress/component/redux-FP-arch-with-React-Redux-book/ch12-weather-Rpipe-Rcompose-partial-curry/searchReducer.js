import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = '';

//updaters
function changeCityName(name, action){
  return action.payload.value;
}

function clearCityName(name, action){
  return '';
}

export default handleActions({
    [actions.changeCityName]: changeCityName,
    [actions.addCity]: clearCityName
  },
  initialState
);