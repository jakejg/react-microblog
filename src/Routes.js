import React from 'react';
import  { Route, Switch, Redirect } from 'react-router-dom';
// import ProductsList from './ProductsList'
// import ProductDetail from './ProductDetail'
// import Cart from './Cart';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/new'>
                <NewPostForm />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default Routes;