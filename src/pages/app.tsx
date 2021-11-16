import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './main';

export const AppComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppComponent;
