import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import CoffeesMap from '../pages/CoffeesMap';

import Route from './Route';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/map" component={CoffeesMap} isPrivate />
      </Switch>
    </Router>
  );
}
