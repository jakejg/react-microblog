import React, { useState } from 'react';
import { Button } from 'reactstrap';
import {v4 as uuid} from 'uuid';

const NewPostForm = ({addComment, id}) => {
    const [formData, setFormData] = useState({text: ""});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const commentId = id || uuid();
        addComment(formData, commentId);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" value={formData.text} placeholder={"New Comment"} onChange={handleChange} />
            <Button>Add</Button>
        </form>
    );
}

export default NewPostForm;
