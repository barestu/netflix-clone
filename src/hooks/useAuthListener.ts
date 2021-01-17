import Firebase from 'firebase';
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { IUserInfo } from '../types/shape';

interface IAuthListener {
  user: IUserInfo | null;
}

export default function useAuthListener(): IAuthListener {
  const localUser = localStorage.getItem('authUser') || '{}';
  const [user, setUser] = useState<Firebase.UserInfo | null>(JSON.parse(localUser));
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
