import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { routeConstants } from "@constants";
import PrivateRoute from "@routes";
import { Home, Profile, Login, Registration, ResetPassword } from "@pages";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className="App_main">
        <Router>
          <Switch>
            <Route path={routeConstants.LOGIN_ROUTE} component={Login} />
            <Route
              path={routeConstants.REGISTER_ROUTE}
              component={Registration}
            />
            <Route
              path={routeConstants.RESET_PASSWORD_ROUTE}
              component={ResetPassword}
            />
            <PrivateRoute
              path={routeConstants.PROFILE_ROUTE}
              component={Profile}
            />
            <PrivateRoute
              exact
              path={routeConstants.HOME_ROUTE}
              component={Home}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
