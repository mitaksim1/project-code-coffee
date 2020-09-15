import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>    
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}