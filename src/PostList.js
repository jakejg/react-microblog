import React from 'react';
import PostListItem from './PostListItem'
import './styles/PostList.css'
import { useSelector } from 'react-redux';
const PostList = () => {
    const posts = useSelector(store => store.titles)

    return (
        <div className="PostList">
           {posts.map(({id, title, description }) => <PostListItem key={id} id={id} title={title} description={description} />)}
        </div>
    );
}

export default PostList;
