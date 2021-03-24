import { authConstants } from "@constants";
import { AuthState, Action } from "./types";

const user = localStorage.getItem("user");

const initialState = user
  ? { user: JSON.parse(user), isAuthorization: true, isLoading: false }
  : { user: null, isAuthorization: false, isLoading: false };

const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case authConstants.SIGNUP:
      return {
        user: action.user,
        isAuthorization: true,
        isLoading: false,
      };
    case authConstants.LOGIN:
      return {
        user: action.user,
        isAuthorization: true,
        isLoading: false,
      };
    case authConstants.LOGOUT:
      return {
        user: null,
        isAuthorization: false,
        isLoading: false,
      };
    case authConstants.SET_LOADING:
      return {
        user: state.user,
        isAuthorization: state.isAuthorization,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default authReducer;
