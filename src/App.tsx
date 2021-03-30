import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { routeConstants } from "@constants";
import { PrivateRoute } from "@components";
import {
  HomePage,
  PainterPage,
  DrawingPage,
  ProfilePage,
  LoginPage,
  RegistrationPage,
  ResetPasswordPage,
} from "@pages";
import { CommonState } from "@store";

export default function App(): JSX.Element {
  const theme = useSelector((state: CommonState) => state.auth.theme);

  return (
    <div className={`App ${theme}`}>
      <div className="App__main">
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
            <PrivateRoute
              path={routeConstants.DRAWING_ROUTE}
              component={DrawingPage}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
