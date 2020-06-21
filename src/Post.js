import React from 'react';

const Post = ({id, title, description, body}) => {


    return (
        <div className="Post">
           <h4>{title}</h4>
           <div>{description}</div>
           <div>{body}</div>
        </div>
    );
}

export default Post;
