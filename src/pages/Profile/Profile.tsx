import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "@contexts/index";
import { Header } from "@components/index";
import { LOGIN_ROUTE } from "@constants/routes";
import styles from "./_Profile.module.scss";

export default function Profile(): JSX.Element {
  const { logout } = useAuth();
  const history = useHistory();

  function handleLogOut(): void {
    logout();
    history.push(LOGIN_ROUTE);
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
