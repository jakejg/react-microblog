import posts from './postReducer';
import titles from './titlesReducer';
import { combineReducers } from "redux";

export default combineReducers({
  posts,
  titles,
});