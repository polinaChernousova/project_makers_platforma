import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs3dWbsxmpWgKrw7B-3bazAG1oY6e3cDk",
  authDomain: "projectvideoplatforma.firebaseapp.com",
  projectId: "projectvideoplatforma",
  storageBucket: "projectvideoplatforma.appspot.com",
  messagingSenderId: "473982628984",
  appId: "1:473982628984:web:83babab6b9294d6907698d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
