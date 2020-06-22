import {ADD_POST,
        EDIT_POST,
        DELETE_POST,
        ADD_COMMENT,
        DELETE_COMMENT,
        LOAD_POSTS,
        ERROR,
        LOAD_TITLES } from './actionTypes';
import axios from 'axios';


const BASE_URL = process.env.REACT_APP_BASE_URL || `http://localhost:5000`


export const getTitles = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`${BASE_URL}/api/posts`)
            console.log(res.data)
            dispatch(loadTitles(res.data))
        }
        catch (e){
            dispatch(gotError(e.response))
        }
    }
}

export const getFullPosts = (id) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`${BASE_URL}/api/posts/${id}`)
            console.log(res.data)
            dispatch(loadPosts(res.data))
        }
        catch (e){
            dispatch(gotError(e.response))
        }
    }
}

export const addPostToAPI = (postData) => {
    return async (dispatch) => {
        try{
            const res = await axios.post(`${BASE_URL}/api/posts`, postData)
            console.log(res.data)
            dispatch(addPost(res.data))
        }
        catch (e){
            dispatch(gotError(e.response))
        }
    }
}

export const editPostOnAPI = (postData, id) => {
    return async (dispatch) => {
        try{
            const res = await axios.put(`${BASE_URL}/api/posts/${id}`, postData)
            console.log(res.data)
            dispatch(editPost(res.data))
        }
        catch (e){
            console.log(e)
            dispatch(gotError(e.response))
        }
    }
}

export const deletePostOnAPI = (id) => {
    return async (dispatch) => {
        try{
            const res = await axios.delete(`${BASE_URL}/api/posts/${id}`)
            console.log(res.data)
            dispatch(deletePost(+id))
        }
        catch (e){
            console.log(e)
            dispatch(gotError(e.response))
        }
    }
}


export const gotError = (msg) => {
    return {type: ERROR, msg}
}

export const loadTitles = (titles) => {
    return {type: LOAD_TITLES, titles}
}

export const loadPosts = (post) => {
    return {type: LOAD_POSTS, post}
}

export const addPost = ({id, title, description, body}) => {
    return {type: ADD_POST, id: id, postData: {title, description, body}}
}

export const editPost = ({id, title, description, body}) => {
    return {type: EDIT_POST, id: id, postData: {title, description, body}}
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