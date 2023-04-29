import "@/styles/globals.css";
import { auth } from "../firebase";
import Login from "@/components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "@/components/Loading";

export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  
  if (loading) return <Loading type="spinningBubbles" color="#3CBC28" />;
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}
