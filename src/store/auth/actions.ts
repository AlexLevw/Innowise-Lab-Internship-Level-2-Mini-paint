import { authConstants } from "@constants";
import authService from "@services";
import { Dispatch } from "redux";
import firebase from "firebase";

function signup(
  email: string,
  username: string,
  password: string
): (dispatch: Dispatch) => void {
  return (dispatch: Dispatch): void => {
    authService.signup(email, username, password).then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.SIGNUP,
        user,
      });
    });
  };
}

function login(email: string, password: string) {
  return (dispatch: Dispatch): void => {
    authService.login(email, password).then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN,
        user,
      });
    });
  };
}

function logout() {
  return (dispatch: Dispatch): void => {
    authService.logout().then(() => {
      localStorage.removeItem("user");
      dispatch({
        type: authConstants.LOGOUT,
      });
    });
  };
}

function resetPassword(email: string) {
  return (dispatch: Dispatch): void => {
    authService.resetPassword(email).then(() => {
      dispatch({
        type: authConstants.RESET_PASSWORD,
      });
    });
  };
}

function updateEmail(currentUser: firebase.User, email: string) {
  return (dispatch: Dispatch): void => {
    authService.updateEmail(currentUser, email).then(() => {
      dispatch({
        type: authConstants.UPDATE_EMAIL,
      });
    });
  };
}

function updatePassword(currentUser: firebase.User, newPassword: string) {
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
