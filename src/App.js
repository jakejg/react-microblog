import React, { useState } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import './App.css';
import {v4 as uuid} from 'uuid';

function App() {
    const [posts, setPosts] = useState({12:{title: "Test", description: "This is a test post", body: "Test this thing out!"}});

    const addPost = ({title, description, body}) => {
        setPosts(posts => ({...posts, [uuid()]: {title, description, body}}))
    }
    return (
        <div>
            <Navbar />
            <Routes posts={posts} addPost={addPost} />
        </div>
    );
}



export default App;
