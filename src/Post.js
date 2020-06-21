import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/Post.css';
const Post = ({posts}) => {
    const { postId } = useParams();
    const postIdKey = Object.keys(posts).find(id => id === postId);
    const post = posts[postIdKey];

    return (
        <div className="Post">
           <h3>{post.title}</h3>
           <div><i>{post.description}</i></div>
           <div>{post.body}</div>
        </div>
    );
}

export default Post;
