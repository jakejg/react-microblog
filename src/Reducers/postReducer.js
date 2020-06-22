import {ADD_POST,
    EDIT_POST,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT, 
    LOAD_POSTS } from './actionTypes';

// const INITIAL_STATE = {
//     1: {
//         title: "Test", 
//         description: "This is a test post", 
//         body: "Test this thing out!",
//         comments: {2:"this is great"}
//     } 
// }        


// { id,
//     *        title,
//     *        description,
//     *        body,
//     *        votes,
//     *        comments: [ { id, text }, ... ],
//     *      }
const postReducer = (state={}, action) => {
    switch(action.type){
        case LOAD_POSTS:
            return {
                ...state,
                [action.post.id]: {
                    ...action.post
                }
            }
        case ADD_POST:
            return {
                ...state,
                [action.id]: {
                    ...action.postData,
                    comments: []
                }
            }
        
        case EDIT_POST:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id], 
                    ...action.postData
                    // comments: [
                    //     ...state[action.id].comments,
                    // ]
                }
            }
            
        case DELETE_POST:
            let stateCopy = { ...state }

            delete stateCopy[action.id];
            return stateCopy

        case ADD_COMMENT:
            const {postId, commentId, text } = action;
            return {
                ...state,
                [postId]: {
                    ...state[postId],
                    comments:[
                        ...state[postId].comments,
                        {id: commentId, text}
                    ]
                }
            }

        case DELETE_COMMENT:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    comments: state[postId].comments.filter(comment => comment.id !== action.commentId)
                }
            }

        default:
            return state
    }
}

export default postReducer;