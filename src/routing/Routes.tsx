import * as React from 'react';
import {
  RouteComponentProps, withRouter, Switch, Route,
  // Link,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default class Routes extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <Switch>
        <Route path="/homePage">
          <HomePage />
        </Route>
      </Switch>
    );
  }
}

const routesWithRouter = withRouter(Routes);
export { routesWithRouter as Routes };
