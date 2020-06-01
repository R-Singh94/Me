import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Me">
          <Me user={user} />
        </Route>
        <Route path="/Me/Projects">
          <Projects user={user} />
        </Route>
        <Route path="/Me/Work">
          <Work user={user} />
        </Route>
        <Route path="/Me/Education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;