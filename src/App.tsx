import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "@contexts/index";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  RESET_PASSWORD_ROUTE,
} from "@constants/routes";
import PrivateRoute from "@routes/index";
import { Home, Login, Registration, ResetPassword } from "@pages/index";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className="App_main">
        <Router>
          <AuthProvider>
            <Switch>
              <Route path={LOGIN_ROUTE} component={Login} />
              <Route path={REGISTER_ROUTE} component={Registration} />
              <Route path={RESET_PASSWORD_ROUTE} component={ResetPassword} />
              <PrivateRoute path={HOME_ROUTE} component={Home} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}
