import { combineReducers } from "redux";
import toastsReducer from "./toasts/reducer";

export default combineReducers({
  toasts: toastsReducer,
});
