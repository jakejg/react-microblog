import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './styles/Post.css';
import NewPostForm from './NewPostForm';
import { Button } from 'reactstrap';

const Post = ({posts, addOrEditPost, deletePost}) => {
    const [edit, setEdit] = useState(false);
    const history = useHistory();

    const { postId } = useParams();
    const postIdKey = Object.keys(posts).find(id => id === postId);
    const post = posts[postIdKey];

    const handleDelete = () => {
        deletePost(postIdKey);
        history.push('/');
    }

    return (
        <div className="Post">
            {edit && <NewPostForm addOrEditPost={addOrEditPost} title="Edit Post" id={postIdKey}/>}
           <div>
               <h3>{post.title}</h3>
               <div className="Post-btns">
                    <Button onClick={() => setEdit(!edit)}>Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            </div>
           <div><i>{post.description}</i></div>
           <div>{post.body}</div>
        </div>
    );
}

export default Post;
