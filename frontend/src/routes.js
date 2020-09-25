import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import CoffeesMap from './pages/CoffeesMap';
import history from './history';


export default function Routes() {
    return (
        <Router history={history}>
            <Switch>    
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/map" component={CoffeesMap}/>
            </Switch>
        </Router>
    )
}