import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbPUdpzFU8mlkeIRo33rsZnbpF_0NAzow",
  authDomain: "whatsapp-2-eb197.firebaseapp.com",
  projectId: "whatsapp-2-eb197",
  storageBucket: "whatsapp-2-eb197.appspot.com",
  messagingSenderId: "621938232277",
  appId: "1:621938232277:web:1e41d7a35fc2cd33a74b5c",
};

const app = !firebase.apps.length
  ? firebase.initialize(firebaseConfig)
  : firebase.app();

const auth = getAuth(app);
const db = app.firestore();
const provider = new GoogleAuthProvider();

export { auth, db, provider };
