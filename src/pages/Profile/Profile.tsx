import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Header } from "@components";
import { routeConstants } from "@constants";
import { authActions } from "@store/auth";
import styles from "./_Profile.module.scss";

export default function Profile(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogOut(): void {
    dispatch(authActions.logout());
    history.push(routeConstants.LOGIN_ROUTE);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main_top}>
            <p>Username</p>
            <button type="button" onClick={handleLogOut}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
