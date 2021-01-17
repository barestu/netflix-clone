import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyALaMPYdmS2TDUYbMiYfIEcGYZX4c_DXFE',
  authDomain: 'netflix-clone-735aa.firebaseapp.com',
  projectId: 'netflix-clone-735aa',
  storageBucket: 'netflix-clone-735aa.appspot.com',
  messagingSenderId: '219139613697',
  appId: '1:219139613697:web:e40cfb566ab1e207eecc00'
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
