import {
    ADD_COMMENT,
    DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = {
    1: {
        postId: 1,
        text: "This is great!"
    } 
}        
const postReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_COMMENT:
            const { text, postId, commentId } = action;
            const stateCommentsCopy = {...state};
            stateCommentsCopy.posts[postId].comments[commentId] = text;
            return stateCommentsCopy;

        case DELETE_COMMENT:
        

        default:
            return state
    }
}

export default postReducer;



