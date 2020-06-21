import React, { useState } from 'react';
import { Button } from 'reactstrap';
import FormGroupComp from './FormGroupComp';
import { useHistory, Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';


const NewPostForm = () => {
    const [formData, setFormData] = useState({title: "", description: "", body: ""});
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/')
    }

    return (
        <div className="DiscountForm">
            <h1>New Post</h1>
            <form >
                {Object.keys(formData).map(field => <FormGroupComp key={field} field={field} formData={formData} handleChange={handleChange} type="text" />)}
                <Button onClick={handleSubmit}>Create Post!</Button>
                <Link to='/'><Button>Cancel</Button></Link>
            </form>
        </div>
    );
}

export default NewPostForm;
