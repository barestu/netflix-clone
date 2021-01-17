import Firebase from 'firebase';
import { createContext } from 'react';
import { firebase } from '../lib/firebase.prod';

interface IFirebaseCtx {
  firebase: Firebase.app.App;
}

export const FirebaseContext = createContext<IFirebaseCtx>({ firebase });
