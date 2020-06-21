import React from 'react';
import  { Route, Switch, Redirect } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import Home from './Home';
import Post from './Post';


const Routes = ({posts, addOrEditPost, deletePost}) => {
    return(
        <Switch>
            <Route exact path='/'>
                <Home posts={posts} />
            </Route>
            <Route exact path='/new'>
                <NewPostForm addOrEditPost={addOrEditPost} title="New Post"/>
            </Route>
            <Route exact path='/:postId'>
                <Post posts={posts} addOrEditPost={addOrEditPost} deletePost={deletePost}/>
            </Route>

            <Redirect to='/' />
        </Switch>
    )
}

export default Routes;