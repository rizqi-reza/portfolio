import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './main';
import { WeddingPage } from './wedding';

export const AppComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/pernikahanfitririzqi">
          <WeddingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppComponent;
