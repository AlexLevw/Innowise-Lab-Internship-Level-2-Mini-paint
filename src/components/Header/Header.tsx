import React from "react";
import { Link, useHistory } from "react-router-dom";
import { HOME_ROUTE, PROFILE_ROUTE } from "@constants/routes";
import styles from "./_Header.module.scss";

export default function Header(): JSX.Element {
  const history = useHistory();
  const pathName = history.location.pathname;

  return (
    <div className={styles.container}>
      <Link
        className={styles.link + (pathName === HOME_ROUTE ? " active" : "")}
        to={HOME_ROUTE}
      >
        Home
      </Link>
      <Link
        className={styles.link + (pathName === PROFILE_ROUTE ? " active" : "")}
        to={PROFILE_ROUTE}
      >
        Profile
      </Link>
    </div>
  );
}
