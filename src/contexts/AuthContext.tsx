import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase";
import { auth, db } from "../firebase";

declare global {
  interface Window {
    userId: string;
  }
}

interface IAuthContextValue {
  currentUser: firebase.User;
  signup: (email: string, username: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
}

interface IAuthProviderProps {
  children: JSX.Element;
}

const AuthContext = React.createContext<IAuthContextValue>(
  {} as IAuthContextValue
);

export function useAuth(): IAuthContextValue {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const [currentUser, setCurrentUser] = useState<firebase.User>(
    {} as firebase.User
  );
  const [loading, setLoading] = useState<boolean>(true);

  const signup = async (
    email: string,
    username: string,
    password: string
  ): Promise<void> => {
    await db
      .doc(`/users/${username}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          throw new Error("This username is already taken ");
        } else {
          return auth.createUserWithEmailAndPassword(email, password);
        }
      })
      .then((data) => {
        if (data.user === null) {
          throw new Error("Error while creating user ");
        } else {
          const userId = data.user.uid;
          const userCredentials = {
            username,
            userId,
          };
          db.doc(`/users/${username}`).set(userCredentials);
        }
      });
  };

  const login = async (email: string, password: string): Promise<void> => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  const logout = (): Promise<void> => auth.signOut();

  const resetPassword = (email: string): Promise<void> =>
    auth.sendPasswordResetEmail(email);

  const updateEmail = (email: string): Promise<void> =>
    currentUser.updateEmail(email);

  const updatePassword = (password: string): Promise<void> =>
    currentUser.updatePassword(password);

  useEffect(() => {
    const unsubscribe: firebase.Unsubscribe = auth.onAuthStateChanged(
      (user): void => {
        if (user) {
          window.userId = user.uid;
          setCurrentUser(user);
        }
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
