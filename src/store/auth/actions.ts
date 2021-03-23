import { Dispatch } from "redux";
import firebase from "firebase";
import { authConstants } from "@constants";
import { authService, dbServices } from "@services";
import { User } from "@store/auth/types";

function signup(
  email: string,
  username: string,
  password: string
): CallableFunction {
  return (dispatch: Dispatch): void => {
    authService.signup(email, username, password).then((fbUser) => {
      const user: User = {
        fbUser,
        username,
      };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.SIGNUP,
        user,
      });
    });
  };
}

function login(email: string, password: string): CallableFunction {
  return (dispatch: Dispatch): void => {
    authService.login(email, password).then((fbUser) => {
      dbServices.getUserData(email).then((userData) => {
        const user: User = {
          fbUser,
          username: userData.username,
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN,
          user,
        });
      });
    });
  };
}

function logout(): CallableFunction {
  return (dispatch: Dispatch): void => {
    authService.logout().then(() => {
      localStorage.removeItem("user");
      dispatch({
        type: authConstants.LOGOUT,
      });
    });
  };
}

function resetPassword(email: string): CallableFunction {
  return (dispatch: Dispatch): void => {
    authService.resetPassword(email).then(() => {
      dispatch({
        type: authConstants.RESET_PASSWORD,
      });
    });
  };
}

function updateEmail(
  currentUser: firebase.User,
  email: string
): CallableFunction {
  return (dispatch: Dispatch): void => {
    authService.updateEmail(currentUser, email).then(() => {
      dispatch({
        type: authConstants.UPDATE_EMAIL,
      });
    });
  };
}

function updatePassword(
  currentUser: firebase.User,
  newPassword: string
): CallableFunction {
  return (dispatch: Dispatch): void => {
    authService.updatePassword(currentUser, newPassword).then(() => {
      dispatch({
        type: authConstants.UPDATE_PASSWORD,
      });
    });
  };
}

export default {
  signup,
  login,
  logout,
  resetPassword,
  updateEmail,
  updatePassword,
};
