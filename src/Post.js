import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './styles/Post.css';
import NewPostForm from './NewPostForm';
import { Button } from 'reactstrap';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, getFullPosts } from './Reducers/actionCreators';

const Post = () => {
    const [edit, setEdit] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const { postId } = useParams();

    console.log(postId)

    useEffect(() => {
        console.log("effecting")
        dispatch(getFullPosts(postId))
    }, [dispatch, postId])

    const posts = useSelector(store => store.posts);
    console.log(posts)

    const postIdKey = Object.keys(posts).find(id => id === postId);
    const post = posts[postIdKey] || {};
    const comments = post.comments || [];

    const handleDelete = () => {
        dispatch(deletePost(postIdKey));
        history.push('/');
    }

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
                {comments.map(c => <li className="Post-comments-li" key={c.id} ><Comment id={c.id} postId={postIdKey} text={c.text} /></li>)}
                </ul> 
                <CommentForm postId={postId} />
           </div>
        </div>
    );
}

export default Post;

// 6:30