import React from 'react';
import PostListItem from './PostListItem'
import './styles/PostList.css'
import { useSelector } from 'react-redux';
const PostList = () => {
    const posts = useSelector(store => store)

    return (
        <div className="PostList">
           {Object.keys(posts).map(id => <PostListItem key={id} id={id} title={posts[id].title} description={posts[id].description} />)}
        </div>
    );
}

export default PostList;
