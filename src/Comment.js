import React, { useState } from 'react';
import './styles/Comment.css';

const Comment = ({id , text}) => {

    return (
        <>
            <span className="Comment-delete">❌</span>
            {text}
        </>
    );
}

export default Comment;

// 3:20