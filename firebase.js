import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbPUdpzFU8mlkeIRo33rsZnbpF_0NAzow",
  authDomain: "whatsapp-2-eb197.firebaseapp.com",
  projectId: "whatsapp-2-eb197",
  storageBucket: "whatsapp-2-eb197.appspot.com",
  messagingSenderId: "621938232277",
  appId: "1:621938232277:web:1e41d7a35fc2cd33a74b5c",
};

const createFirebaseApp = (config = {}) => {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
};
const app = createFirebaseApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
