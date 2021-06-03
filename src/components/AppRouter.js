import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Product from './Product';
import Home from './Home';
function AppRouter() {
    return (
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Product" component={Product}></Route>
            </Switch>
        
        
        </div>
    )
}

export default AppRouter
