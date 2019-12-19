import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="background">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
