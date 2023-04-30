import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const addUsers = async (email, lastSeen, photoURL, userId) => {
  const userData = {
    email,
    lastSeen,
    photoURL,
    userId,
  };
  await setDoc(doc(db, "users", userId), userData, { merge: true });
};

export const addChatUsers = async (chatUsers) => {
  try {
    await addDoc(collection(db, "chats"), { users: chatUsers });
    console.log("Document written chat added successfully");
  } catch (error) {
    throw new Error(error);
  }
};

export const chatAlreadyExists = async (userEmail, reciepientEmail) => {
  const q = query(
    collection(db, "chats"),
    where("users", "array-contains", userEmail)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.some((doc) =>
    doc.data().users.includes(reciepientEmail)
  );
};
