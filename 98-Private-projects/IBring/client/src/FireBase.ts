import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import env from "react-dotenv";

const firebaseConfig = {
  apiKey: env.REACT_API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, env.REACT_APP_BUCKET_URL);

export default storage