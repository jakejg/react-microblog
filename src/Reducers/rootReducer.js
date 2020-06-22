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
            const { title, description, body } = action.postData;
            const AddCopy = {...state}
            AddCopy[action.id] = {title, description, body, comments: {} }
            return AddCopy
        
        case EDIT_POST:
            const EditCopy = {...state}
            EditCopy[action.id] = {...action.postData, comments: EditCopy[action.id].comments }
            return EditCopy

        case DELETE_POST:
            const stateCopy = {...state};
            delete stateCopy[action.id];
            return stateCopy

        case ADD_COMMENT:
            const {postId, commentId } = action;
            commentCopy = {...state};
            commentsCopy[postId].comments = {...commentsCopy[postId].comments, commentId: text}
            return commentsCopy;
    
        case DELETE_COMMENT:

        default:
            return state
    }
}

export default postReducer;