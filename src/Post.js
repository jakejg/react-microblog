import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Post.css';
import NewPostForm from './NewPostForm';
const Post = ({posts, addOrEditPost}) => {
    const [edit, setEdit] = useState(true);

    const { postId } = useParams();
    const postIdKey = Object.keys(posts).find(id => id === postId);
    const post = posts[postIdKey];


    return (
        <div className="Post">
            {edit && <NewPostForm addOrEditPost={addOrEditPost} title="Edit Post" id={postIdKey}/>}
           <h3>{post.title}</h3>
           <div><i>{post.description}</i></div>
           <div>{post.body}</div>
        </div>
    );
}

export default Post;
