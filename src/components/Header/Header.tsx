import React from "react";
import { Link, useHistory } from "react-router-dom";
import { routeConstants } from "@constants";
import styles from "./_Header.module.scss";

export default function Header(): JSX.Element {
  const history = useHistory();
  const pathName = history.location.pathname;

  return (
    <div className={styles.container}>
      <Link
        className={
          styles.link +
          (pathName === routeConstants.HOME_ROUTE ? " active" : "")
        }
        to={routeConstants.HOME_ROUTE}
      >
        Home
      </Link>
      <Link
        className={
          styles.link +
          (pathName === routeConstants.PROFILE_ROUTE ? " active" : "")
        }
        to={routeConstants.PROFILE_ROUTE}
      >
        Profile
      </Link>
    </div>
  );
}
