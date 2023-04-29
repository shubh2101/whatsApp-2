import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addUsers = async (email, lastSeen, photoUrl, userId) => {
  const userData = {
    email,
    lastSeen,
    photoUrl,
    userId,
  };
  await setDoc(doc(db, "users", userId), userData, { merge: true });
};

export const addChatUsers = async (chatUsers) => {
  try {
    await addDoc(collection(db, "chats"), { users: chatUsers });
  } catch (error) {
    throw new Error(error);
  }
};
