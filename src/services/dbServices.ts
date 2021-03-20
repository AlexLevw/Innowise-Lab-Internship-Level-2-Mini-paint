import firebase from "firebase";
import uniqid from "uniqid";
import { db } from "@src/firebase";

async function saveImageData(
  userId: string,
  username: string,
  drawingUrl: string
): Promise<void> {
  const drawingId = uniqid();
  const drawingData = {
    userId,
    username,
    drawingUrl,
  };
  db.doc(`/drawings/${drawingId}`).set(drawingData);
}

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

export default { saveImageData, getUserData };
