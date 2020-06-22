import React, { useState } from 'react';
import { Button } from 'reactstrap';
import {v4 as uuid} from 'uuid';
import { addComment } from './Reducers/actionCreators';
import { useDispatch } from 'react-redux';

const CommentForm = ({ postId}) => {
    const [formData, setFormData] = useState({text: ""});
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(formData.text, postId, uuid()));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" value={formData.text} placeholder={"New Comment"} onChange={handleChange} />
            <Button>Add</Button>
        </form>
    );
}

export default CommentForm;
