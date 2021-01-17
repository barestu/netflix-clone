import Firebase from 'firebase';
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export interface IUserInfo extends Firebase.UserInfo {}

interface IAuthListener {
  user: IUserInfo | null;
}

export default function useAuthListener(): IAuthListener {
  const [user, setUser] = useState<Firebase.UserInfo | null>(
    JSON.parse(localStorage.getItem('authUser') || '')
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
