import React from 'react';
import PostListItem from './PostListItem'

const PostList = ({posts}) => {

    return (
        <div className="PostList">
           {Object.keys(posts).map(id => <PostListItem id={id} title={posts[id].title} description={posts[id].description} />)}
        </div>
    );
}

export default PostList;
