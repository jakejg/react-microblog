import React from 'react';

const PostListItem = ({id, title, description, body}) => {


    return (
        <div className="PostListItem">
           <Link to={`/posts/${id}`}>{title}</Link>
           <div>{description}</div>
           <div>{body}</div>
        </div>
    );
}

export default PostListItem;