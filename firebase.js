import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApXjHtoS4fJiowYMTDX_1cHe6PO_8N8mY",
  authDomain: "whatsapp-clone-nextjs-e6a69.firebaseapp.com",
  projectId: "whatsapp-clone-nextjs-e6a69",
  storageBucket: "whatsapp-clone-nextjs-e6a69.appspot.com",
  messagingSenderId: "553870677535",
  appId: "1:553870677535:web:d4e626c93fc0eb919d272a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
