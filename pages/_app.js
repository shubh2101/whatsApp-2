import "@/styles/globals.css";
import { auth } from "../firebase";
import Login from "@/components/Login";
import { useAuthState } from "react-firebase-hooks/auth";

export default function App({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}
