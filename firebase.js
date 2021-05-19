import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkSvgKhHxtBBQ5dOcGGn5xSjFYQuj1HAs",
  authDomain: "whatsapp-clone-next-d90c9.firebaseapp.com",
  projectId: "whatsapp-clone-next-d90c9",
  storageBucket: "whatsapp-clone-next-d90c9.appspot.com",
  messagingSenderId: "591611094292",
  appId: "1:591611094292:web:516e6c3aecd3913b878e01",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
