import React from 'react';
import  { Route, Switch, Redirect } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import Home from './Home';
// import ProductDetail from './ProductDetail'
// import Cart from './Cart';

const Routes = ({posts, addPost}) => {
    return(
        <Switch>
            <Route exact path='/'>
                <Home posts={posts} />
            </Route>
            <Route exact path='/new'>
                <NewPostForm addPost={addPost}/>
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default Routes;