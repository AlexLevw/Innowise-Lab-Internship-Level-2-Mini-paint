import firebase from "firebase";

export interface AuthState {
  user: firebase.User | null;
  isAuthorization: boolean;
}
