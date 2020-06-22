import React, { useState } from 'react';
import './styles/Comment.css';
import { useDispatch } from 'react-redux';
import { deleteComment } from './Reducers/actionCreators';

const Comment = ({id, postId , text}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteComment(postId, id))
    }

    return (
        <>
            <span onClick={handleClick} className="Comment-delete">❌</span>
            {text}
        </>
    );
}

export default Comment;

// 3:20