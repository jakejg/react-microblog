import React, { useState } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import './App.css';


function App() {
    const [posts, setPosts] = useState({12:{title: "Test", description: "This is a test post", body: "Test this thing out!"}});

    const addOrEditPost = ({title, description, body}, id) => {
        setPosts(posts => {
            const postsCopy = {...posts};
            postsCopy[id] = {title, description, body};
            return postsCopy;
        })
    }


    return (
        <div>
            <Navbar />
            <Routes posts={posts} addOrEditPost={addOrEditPost} />
        </div>
    );
}



export default App;
