import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import Preview from './Preview';
import NotFound from './Components/Pages/NotFound';
import Home from './Components/Pages/Home';
import Blog from './Components/Blog/Blog';
import Post from './Components/Blog/Post';

const App = (props) => (
  <Router>
    <Switch>
      <Route
        exact path="/"
        render={ routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />

      {/*
      <Route exact path="/preview"
        render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      */}

      <Route exact path="/blog"
        render={routeProps => <Blog {...routeProps} prismicCtx={props.prismicCtx} />} />

      <Route exact path="/blog/:uid"
        render={routeProps => <Post {...routeProps} prismicCtx={props.prismicCtx} />} />

      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
