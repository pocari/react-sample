import React from 'react';
import 'App.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from 'components/Home/index';
import Characters from 'components/Characters/index';

const App: React.FC<{}> = () => (
  <div className="container">
    <Switch>
      <Route path="/characters/:code" component={Characters} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
