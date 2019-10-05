import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Home, Profile } from './pages';


const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  )
};

export default App;
