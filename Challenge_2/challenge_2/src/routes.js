import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './view/Home';
import Products from './view/Products';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
      </Switch>
    </BrowserRouter>
  )   
}