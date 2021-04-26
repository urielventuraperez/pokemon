import React from 'react';
import { Route, Switch, Redirect  } from 'react-router';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Pokemon from '../views/Pokemon';

const RenderRoutes = (
  <Switch>
    {/** Public routes **/}
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/home' component={Home}></Route>
    <Route exact path='/pokemon/:name' component={Pokemon}></Route>

    {/* Not found routes */} 
    <Route exact path="/not-found" component={NotFound} />
    <Route exact path="*">
      <Redirect to="/not-found" />
    </Route>
  </Switch>
);

export default RenderRoutes;
