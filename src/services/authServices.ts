import firebase from "firebase";
import { auth, db } from "@src/firebase";

async function signup(
  email: string,
  username: string,
  password: string
): Promise<firebase.User> {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(async (data) => {
      if (data.user === null) {
        throw new Error("Error while creating user!");
      }

      const userId = data.user.uid;
      const userCredentials = {
        username,
        userId,
      };

      await db
        .doc(`/users/${email}`)
        .set(userCredentials)
        .catch(() => {
          throw new Error("Error while creating user!");
        });
      return data.user;
    })
    .catch((err) => {
      throw new Error(err);
    });
}

async function login(email: string, password: string): Promise<firebase.User> {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      if (!data.user) {
        throw new Error("User not found!");
      }
      return data.user;
    })
    .catch((err) => {
      throw new Error(err);
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
