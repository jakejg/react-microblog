import {ADD_POST,
        EDIT_POST,
        DELETE_POST,
        ADD_COMMENT,
        DELETE_COMMENT } from './actionTypes';


export const addPost = (postData, id) => {
    return {type: ADD_POST, id, postData}
}

export const editPost = (postData, id) => {
    return {type: EDIT_POST, id, postData}
}

export const deletePost = (id) => {
    return {type: DELETE_POST, id}
}

export const addComment = (postId, commentId) => {
    return {type: ADD_COMMENT, postId, text}
}

export const deleteComment = (id) => {
    return {type: DELETE_COMMENT, id}
}