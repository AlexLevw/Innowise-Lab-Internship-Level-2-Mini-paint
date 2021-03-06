import firebase from "firebase";

export interface User {
  fbUser: firebase.User;
  username: string;
}

export interface AuthState {
  user: User | null;
  isAuthorization: boolean;
  isLoading: boolean;
  theme: string;
}

export interface Action {
  type: string;
  user: User;
  isLoading: boolean;
  theme: string;
}
