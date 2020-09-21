import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Alert from './pages/Alert';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>    
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/alert" component={Alert}/>
            </Switch>
        </BrowserRouter>
    )
}