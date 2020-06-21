import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({id, title, description}) => {


    return (
        <div className="PostListItem">
           <Link to={`/${id}`}>{title}</Link>
           <div><i>{description}</i></div>
        </div>
    );
}

export default PostListItem;