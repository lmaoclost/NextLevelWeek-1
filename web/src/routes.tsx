import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import CreatePointConfirm from './pages/CreatePointConfirm';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={CreatePointConfirm} path="/create-point-success" />
    </BrowserRouter>
  )
}

export default Routes;