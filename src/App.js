import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { RoutePaths } from './constants/RoutePaths';
import HelloWorldPage from './flows/hello-world';
import LoadMask from './components/LoadMask';

class App extends Component {
  render() {
    return (
      <Suspense fallback={<LoadMask />}>
        <Router>
          <Switch>
            <Route exact path={RoutePaths.HELLO_WORLD_PAGE} component={HelloWorldPage} />
            <Redirect to={RoutePaths.HELLO_WORLD_PAGE} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

// Redux
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
