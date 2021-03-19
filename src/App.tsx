import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { routeConstants } from "@constants";
import { PrivateRoute } from "@components";
import {
  HomePage,
  PainterPage,
  ProfilePage,
  LoginPage,
  RegistrationPage,
  ResetPasswordPage,
} from "@pages";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className="App_main">
        <Router>
          <Switch>
            <Route path={routeConstants.LOGIN_ROUTE} component={LoginPage} />
            <Route
              path={routeConstants.REGISTER_ROUTE}
              component={RegistrationPage}
            />
            <Route
              path={routeConstants.RESET_PASSWORD_ROUTE}
              component={ResetPasswordPage}
            />
            <PrivateRoute
              path={routeConstants.PROFILE_ROUTE}
              component={ProfilePage}
            />
            <PrivateRoute
              exact
              path={routeConstants.HOME_ROUTE}
              component={HomePage}
            />
            <PrivateRoute
              path={routeConstants.PAINTER_ROUTE}
              component={PainterPage}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
