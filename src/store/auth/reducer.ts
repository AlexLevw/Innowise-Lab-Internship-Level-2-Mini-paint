import { authConstants } from "@constants";
import { AuthState, Action } from "./types";

const user = localStorage.getItem("user");

const initialState = user
  ? { user: JSON.parse(user), isAuthorization: true }
  : { user: null, isAuthorization: false };

const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case authConstants.SIGNUP:
      return {
        user: action.user,
        isAuthorization: true,
      };
    case authConstants.LOGIN:
      return {
        user: action.user,
        isAuthorization: true,
      };
    case authConstants.LOGOUT:
      return {
        user: null,
        isAuthorization: false,
      };
    default:
      return state;
  }
};

export default authReducer;
