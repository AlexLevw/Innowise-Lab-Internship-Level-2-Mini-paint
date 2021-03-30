import { authConstants, THEMES } from "@constants";
import { AuthState, Action } from "./types";

const user = localStorage.getItem("user");
const localTheme = localStorage.getItem("theme");
const theme = localTheme !== null ? localTheme : THEMES.DARK;

const initialState = user
  ? {
      user: JSON.parse(user),
      isAuthorization: true,
      isLoading: false,
      theme,
    }
  : { user: null, isAuthorization: false, isLoading: false, theme };

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
        theme: state.theme,
      };
    case authConstants.LOGIN:
      return {
        user: action.user,
        isAuthorization: true,
        isLoading: false,
        theme: state.theme,
      };
    case authConstants.LOGOUT:
      return {
        user: null,
        isAuthorization: false,
        isLoading: false,
        theme: state.theme,
      };
    case authConstants.SET_LOADING:
      return {
        user: state.user,
        isAuthorization: state.isAuthorization,
        isLoading: action.isLoading,
        theme: state.theme,
      };
    case authConstants.SWITCH_THEME:
      return {
        user: state.user,
        isAuthorization: state.isAuthorization,
        isLoading: state.isLoading,
        theme: state.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK,
      };
    default:
      return state;
  }
};

export default authReducer;
