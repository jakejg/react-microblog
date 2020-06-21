import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({id, title, description}) => {


    return (
        <div className="PostListItem">
           <Link to={`/${id}`}>{title}</Link>
           <div>{description}</div>
        </div>
    );
}

export default PostListItem;