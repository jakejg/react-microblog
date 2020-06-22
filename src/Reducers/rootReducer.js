import {ADD_POST,
    EDIT_POST,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = {
    1: {
        title: "Test", 
        description: "This is a test post", 
        body: "Test this thing out!",
        comments: {2:"this is great"}
    } 
}        
const postReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id], 
                    ...action.postData,
                    comments: {}
                }
            }
        
        case EDIT_POST:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id], 
                    ...action.postData,
                    comments: {
                        ...state[action.id].comments,
                    }
                }
            }
            

        case DELETE_POST:
            const stateCopy = {...state};
            delete stateCopy[action.id];
            return stateCopy

        case ADD_COMMENT:
            const {postId, commentId, text } = action;
            const commentsCopy = {...state};
            commentsCopy[postId].comments = {...commentsCopy[postId].comments, [commentId]: text}
            return commentsCopy;
    
        case DELETE_COMMENT:
            const deleteCommentCopy = {...state};
            delete deleteCommentCopy[action.postId].comments[action.commentId];
            return deleteCommentCopy;

        default:
            return state
    }
}

export default postReducer;