import "@/styles/globals.css";
import { auth } from "../firebase";
import Login from "@/components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "@/components/Loading";
import { useEffect } from "react";
import { addUsers } from "@/firebase-calls";
import { serverTimestamp } from "firebase/firestore";

export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  const { email, photoURL, uid } = user || {};
  const lastSeen = serverTimestamp();

  useEffect(() => {
    if (user) {
      addUsers(email, lastSeen, photoURL, uid);
    }
  }, [user, email, lastSeen, photoURL, uid]);

  if (loading) return <Loading type="spinningBubbles" color="#3CBC28" />;
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}
