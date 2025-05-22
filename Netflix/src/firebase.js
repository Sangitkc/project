import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtqiMHZbm0FsGs_NkYhc4X02y9PC0et-0",
  authDomain: "netflix-clone-179f5.firebaseapp.com",
  projectId: "netflix-clone-179f5",
  storageBucket: "netflix-clone-179f5.firebasestorage.app",
  messagingSenderId: "504133781353",
  appId: "1:504133781353:web:12f021311e07b5f9029ff8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log(error)
    alert(error)
  }
};

const logout = ()=>{
  signOut(auth)
}

export {auth,db,login,signup,signOut}