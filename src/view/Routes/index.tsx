import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import HomePage from '../Pages/Home';
import ProjectsPage from '../Pages/Projects';

const Routes = (): JSX.Element => {
  return (
    <>
      <HashRouter basename="/personal-portfolio">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route path="/" render={() => <div> 404 </div>} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default Routes;
