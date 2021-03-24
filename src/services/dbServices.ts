import firebase from "firebase";
import uniqid from "uniqid";
import { db } from "@src/firebase";
import { DrawingData } from "./types";

async function getUserData(
  email: string
): Promise<firebase.firestore.DocumentData> {
  return db
    .doc(`/users/${email}`)
    .get()
    .then((doc) => {
      const userData = doc.data();
      if (!userData) throw new Error("User not found!");
      return userData;
    })
    .catch((err: Error) => {
      throw new Error(err.message);
    });
}

async function saveImageData(
  userId: string,
  username: string,
  drawingUrl: string
): Promise<void> {
  const drawingId = uniqid();
  const drawingData: DrawingData = {
    userId,
    username,
    drawingUrl,
    drawingId,
  };
  db.doc(`/drawings/${drawingId}`).set(drawingData);
}

async function getImages(): Promise<DrawingData[]> {
  const images: DrawingData[] = [];
  await db
    .collection("/drawings/")
    .get()
    .then((QuerySnapshot) => {
      QuerySnapshot.forEach((data) => {
        images.push(<DrawingData>data.data());
      });
    });
  return images;
}

async function checkUser(email: string): Promise<boolean> {
  let hasUser = true;
  await db
    .doc(`/users/${email}`)
    .get()
    .then((doc) => {
      const userData = doc.data();
      if (!userData) throw new Error("User not found!");
      hasUser = true;
    })
    .catch(() => {
      hasUser = false;
    });
  return hasUser;
}

export default { getUserData, saveImageData, getImages, checkUser };
