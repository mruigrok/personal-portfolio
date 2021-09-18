import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/Home';
import ProjectsPage from '../Pages/Projects';

const Routes = (): JSX.Element => {
  return (
    <>
      <BrowserRouter basename="/personal-portfolio">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route path="/" render={() => <div> 404 </div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
