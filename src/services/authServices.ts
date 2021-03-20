import firebase from "firebase";
import { auth, db } from "@src/firebase";

function signup(
  email: string,
  username: string,
  password: string
): Promise<firebase.User> {
  return db
    .doc(`/users/${username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        throw new Error("This username is already taken");
      } else {
        return auth.createUserWithEmailAndPassword(email, password);
      }
    })
    .then(async (data) => {
      if (data.user === null) {
        throw new Error("Error while creating user");
      } else {
        const userId = data.user.uid;
        const userCredentials = {
          username,
          userId,
        };
        await db.doc(`/users/${username}`).set(userCredentials);
        return data.user;
      }
    });
}

function login(email: string, password: string): Promise<firebase.User> {
  return auth.signInWithEmailAndPassword(email, password).then((data) => {
    if (!data.user) {
      throw new Error("login error");
    }
    return data.user;
  });
}

function logout(): Promise<void> {
  return auth.signOut();
}

function resetPassword(email: string): Promise<void> {
  return auth.sendPasswordResetEmail(email);
}

function updateEmail(
  currentUser: firebase.User,
  newEmail: string
): Promise<void> {
  return currentUser.updateEmail(newEmail);
}

function updatePassword(
  currentUser: firebase.User,
  newPassword: string
): Promise<void> {
  return currentUser.updatePassword(newPassword);
}

export default {
  signup,
  login,
  logout,
  resetPassword,
  updateEmail,
  updatePassword,
};
