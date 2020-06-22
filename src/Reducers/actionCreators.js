import {ADD_POST,
        EDIT_POST,
        DELETE_POST,
        ADD_COMMENT,
        DELETE_COMMENT,
        LOAD_POSTS } from './actionTypes';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || `http://localhost:5000`


export const getPosts = () => {
    return async (dispatch) => {
        try{
            const data = axios.get(`${BASE_URL}/api/posts`)
            dispatch(loadPosts)
        }
        catch (e){

        }
    }
}    

export const loadPosts = (posts) => {
    return {type: LOAD_POSTS, posts}
}

export const addPost = (postData, id) => {
    return {type: ADD_POST, id, postData}
}

export const editPost = (postData, id) => {
    return {type: EDIT_POST, id, postData}
}

export const deletePost = (id) => {
    return {type: DELETE_POST, id}
}

export const addComment = (text, postId, commentId) => {
    return {type: ADD_COMMENT, postId, commentId, text: text}
}

export const deleteComment = (postId, commentId) => {
    return {type: DELETE_COMMENT, postId, commentId}
}