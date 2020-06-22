import posts from './rootReducer';
import comments from './commentReducer';
import { combineReducers } from "redux";

export default combineReducers({
  posts,
  comments,
});