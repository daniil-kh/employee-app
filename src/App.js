import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './components/home-page/home-page.component';
import EmployPage from './components/employ-page/employ-page.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/employees' component={EmployPage} />
      </Switch>
    </div>
  );
};

export default App;
