import React, { useState } from 'react';
import { Button } from 'reactstrap';
import FormGroupComp from './FormGroupComp';
import { useHistory, Link } from 'react-router-dom';
import { editPostOnAPI, addPostToAPI } from './Reducers/actionCreators';
import { useDispatch } from 'react-redux';

const NewPostForm = ({title, id}) => {
    const [formData, setFormData] = useState({title: "", description: "", body: ""});
    const history = useHistory();
    const dispatch = useDispatch();
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) dispatch(editPostOnAPI(formData, id));
        else dispatch(addPostToAPI(formData));
        history.push('/')
    }

    return (
        <div className="PostForm">
            <h1>{title}</h1>
            <form >
                {Object.keys(formData).map(field => <FormGroupComp key={field} field={field} formData={formData} handleChange={handleChange} type="text" />)}
                <Button onClick={handleSubmit}>Create Post!</Button>
                <Link to='/'><Button>Cancel</Button></Link>
            </form>
        </div>
    );
}

export default NewPostForm;
