import { createAction } from 'redux-actions';

const changeCityName = createAction('CHANGE_CITY_NAME');
const addCity = createAction('ADD_CITY');

export { changeCityName, addCity };