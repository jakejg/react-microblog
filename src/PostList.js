import React, { useEffect } from 'react';
import PostListItem from './PostListItem';
import './styles/PostList.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTitles } from './Reducers/actionCreators';
const PostList = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getTitles())
    }, [dispatch])

    const posts = useSelector(store => store.titles)

    return (
        <div className="PostList">
           {posts.map(({id, title, description }) => <PostListItem key={id} id={id} title={title} description={description} />)}
        </div>
    );
}

export default PostList;
