import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './styles/Post.css';
import NewPostForm from './NewPostForm';
import { Button } from 'reactstrap';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from './Reducers/actionCreators';

const Post = () => {
    const [edit, setEdit] = useState(false);
    const history = useHistory();
    const posts = useSelector(store => store);
    const dispatch = useDispatch();

    const { postId } = useParams();
    const postIdKey = Object.keys(posts).find(id => id === postId);
    const post = posts[postIdKey];

    const handleDelete = () => {
        dispatch(deletePost(postIdKey));
        history.push('/');
    }

    // const addComment = ({ text }, id) => {
    //     setComments(comments => {
    //         const commentsCopy = {...comments};
    //         commentsCopy[id] = text;
    //         return commentsCopy;
    //     })
    // }


    return (
        <div className="Post">
            {edit && <NewPostForm title="Edit Post" id={postIdKey}/>}
           <div>
               <h2>{post.title}</h2>
               <div className="Post-btns">
                    <Button onClick={() => setEdit(!edit)}>Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            </div>
           <div><i>{post.description}</i></div>
           <div>{post.body}</div>
           <div className="Post-comments">
                <h4>Comments</h4>
                <ul className="Post-comments-list">
                {Object.keys(post.comments).map(id => <li className="Post-comments-li" key={id} ><Comment id={id} text={post.comments[id]} /></li>)}
                </ul> 
                <CommentForm />
           </div>
        </div>
    );
}

export default Post;

// 3:20