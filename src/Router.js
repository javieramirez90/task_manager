import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';

export default (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/profile" component={Profile}/>
    </Switch>
  );
}

