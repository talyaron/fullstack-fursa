import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxG4XSat6btVLIAVCXEvhSdxvUqt5R4Mg",
  authDomain: "ibring-7be26.firebaseapp.com",
  projectId: "ibring-7be26",
  storageBucket: "ibring-7be26.appspot.com",
  messagingSenderId: "722052794129",
  appId: "1:722052794129:web:79e378fb2c2892e583eeb0",
  measurementId: "G-L96YDGZWHJ"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://ibring-7be26.appspot.com");

export default storage