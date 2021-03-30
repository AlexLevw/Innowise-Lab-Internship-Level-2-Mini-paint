import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routeConstants } from "@constants";
import { CommonState } from "@store";
import { authActions } from "@store/auth";
import styles from "./_styles.module.scss";

export default function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const username = useSelector(
    (state: CommonState) => state.auth.user?.username
  );
  const history = useHistory();

  function handleLogOut(): void {
    dispatch(authActions.logout());
    history.push(routeConstants.LOGIN_ROUTE);
  }

  function handleThemeBtnClick(): void {
    dispatch(authActions.switchTheme());
  }

  return (
    <div className="page_wrapper">
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.mainTop}>
            <p className={styles.username}>{username}</p>
            <button
              className={styles.logoOutBtn}
              type="button"
              onClick={handleLogOut}
            >
              Log out
            </button>
          </div>
          <div className={styles.mainCenter}>
            <button
              className={styles.switchThemeBtn}
              type="button"
              onClick={handleThemeBtnClick}
            >
              Switch theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
