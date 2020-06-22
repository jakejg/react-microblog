import React from 'react';
import  { Route, Switch, Redirect } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import Home from './Home';
import Post from './Post';


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Home  />
            </Route>
            <Route exact path='/new'>
                <NewPostForm title="New Post"/>
            </Route>
            <Route exact path='/:postId'>
                <Post />
            </Route>

            <Redirect to='/' />
        </Switch>
    )
}

export default Routes;