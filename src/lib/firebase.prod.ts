import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
