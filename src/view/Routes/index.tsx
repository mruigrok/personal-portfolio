import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import HomePage from '../Pages/Home';
import ProjectsPage from '../Pages/Projects';
import ArticlePage from '../Pages/Article';

// Pass an article ID to the Articlepage element to load that article?
const Routes = (): JSX.Element => (
  <HashRouter basename="/personal-portfolio">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route path="/projects/*" component={ArticlePage} />
      <Route path="/" render={() => <div> 404 </div>} />
    </Switch>
  </HashRouter>
);

export default Routes;
