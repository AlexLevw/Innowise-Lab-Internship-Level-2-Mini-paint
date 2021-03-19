import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { routeConstants } from "@constants";
import { useSelector } from "react-redux";
import { CommonState } from "@store";
import { Header } from "@components";

interface IPrivateRouteProps {
  component: () => JSX.Element;
  path: string;
}

export default function PrivateRoute({
  component: Component,
  path,
}: IPrivateRouteProps & RouteProps): JSX.Element {
  const isAuthorization = useSelector(
    (store: CommonState) => store.auth.isAuthorization
  );

  return (
    <Route
      path={path}
      render={(): React.ReactNode => {
        return isAuthorization ? (
          <>
            <Header />
            <Component />
          </>
        ) : (
          <Redirect to={routeConstants.LOGIN_ROUTE} />
        );
      }}
    />
  );
}
