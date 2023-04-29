import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
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

export const chatAlreadyExists = async (reciepientEmail) => {
  const q = query(
    collection(db, "chats"),
    where("users", "array-contains", reciepientEmail)
  );
  const querySnapshot = await getDocs(q);
  let doesExist = querySnapshot.docs.find(
    (doc) =>
      doc.data().users.find((user) => user === reciepientEmail)?.length > 0
  );

  return !!doesExist;
};
