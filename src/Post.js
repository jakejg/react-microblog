import React from 'react';
import { useParams } from 'react-router-dom';

const Post = ({posts}) => {
    const { postId } = useParams();
    const postIdKey = Object.keys(posts).find(id => id === postId);
    const post = posts[postIdKey];

    return (
        <div className="Post">
           <h4>{post.title}</h4>
           <div>{post.description}</div>
           <div>{post.body}</div>
        </div>
    );
}

export default Post;
