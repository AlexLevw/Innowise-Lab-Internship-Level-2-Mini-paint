import firebase from "firebase";
import uniqid from "uniqid";
import { db } from "@src/firebase";
import { DrawingData } from "./types";

async function getUserData(
  userId: string
): Promise<firebase.firestore.DocumentData> {
  const userData = await db
    .doc(`/users/${userId}`)
    .get()
    .then((doc) => doc.data())
    .catch(() => {
      throw new Error();
    });
  if (!userData) throw new Error();
  return userData;
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

export default { getUserData, saveImageData, getImages };
