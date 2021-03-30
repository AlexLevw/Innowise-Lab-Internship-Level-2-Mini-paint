import { Dispatch } from "redux";
import firebase from "firebase";
import { authConstants } from "@constants";
import { authService, dbServices } from "@services";
import { User } from "@store/auth/types";
import { error } from "toastr";

function switchTheme(): CallableFunction {
  return (dispatch: Dispatch): void => {
    dispatch({
      type: authConstants.SWITCH_THEME,
    });
  };
}

function setIsLoading(value: boolean): CallableFunction {
  return (dispatch: Dispatch): void => {
    dispatch({
      type: authConstants.SET_LOADING,
      isLoading: value,
    });
  };
}

function signup(
  email: string,
  username: string,
  password: string
): CallableFunction {
  return (dispatch: Dispatch): void => {
    dbServices.checkUser(email).then((hasUser) => {
      if (hasUser) {
        error("Error while creating user!");
        dispatch({
          type: authConstants.SET_LOADING,
          isLoading: false,
        });
      } else {
        authService
          .signup(email, username, password)
          .then((fbUser) => {
            const user: User = {
              fbUser,
              username,
            };
            localStorage.setItem("user", JSON.stringify(user));
            dispatch({
              type: authConstants.SIGNUP,
              user,
            });
          })
          .catch((err) => {
            error(err.message);
            dispatch({
              type: authConstants.SET_LOADING,
              isLoading: false,
            });
          });
      }
    });
  };
}

function login(email: string, password: string): CallableFunction {
  return (dispatch: Dispatch): void => {
    authService
      .login(email, password)
      .then((fbUser) => {
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
      })
      .catch((err: Error) => {
        error(err.message);
        dispatch({
          type: authConstants.SET_LOADING,
          isLoading: false,
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
  switchTheme,
  setIsLoading,
  signup,
  login,
  logout,
  resetPassword,
  updateEmail,
  updatePassword,
};
