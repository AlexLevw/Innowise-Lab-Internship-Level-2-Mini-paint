import React from "react";
import { Link, useHistory } from "react-router-dom";
import { routeConstants } from "@constants";
import profileUserIcon from "@assets/icons/profile-user.svg";
import styles from "./_styles.module.scss";

export default function Header(): JSX.Element {
  const history = useHistory();
  const pathName = history.location.pathname;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li
          className={
            styles.link +
            (pathName === routeConstants.HOME_ROUTE ? " active" : "")
          }
        >
          <Link to={routeConstants.HOME_ROUTE}>HOME</Link>
        </li>
        <li
          className={
            styles.link +
            (pathName === routeConstants.PAINTER_ROUTE ? " active" : "")
          }
        >
          <Link to={routeConstants.PAINTER_ROUTE}>PAINTER</Link>
        </li>
      </ul>
      <Link
        className={
          styles.profileLink +
          (pathName === routeConstants.PROFILE_ROUTE ? " active" : "")
        }
        to={routeConstants.PROFILE_ROUTE}
      >
        <img src={profileUserIcon} alt="user" />
      </Link>
    </div>
  );
}
