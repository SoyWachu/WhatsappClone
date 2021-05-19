import "../styles/globals.css";
import { Auth, db } from "../firebase";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import firebase from "firebase";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if (user) {
  //     db.collection("users").doc(users.uid).set(
  //       {
  //         email: user.email,
  //         lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
  //         photoURL: user.photoURL,
  //       },
  //       { merge: true }
  //     );
  //   }
  // }, [user]);
  // const [user, loading] = useAuthState(Auth);
  //if(true) return <Loading/>
  // if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
