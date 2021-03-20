import firebase from "firebase";

export interface User {
  fbUser: firebase.User;
  username: string;
}

export interface AuthState {
  user: User | null;
  isAuthorization: boolean;
}

export interface Action {
  type: string;
  user: User;
}
