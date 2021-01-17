import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export interface IContentInfo {
  docId?: string | null;
  description?: string | null;
  genre?: string | null;
  id?: string | null;
  maturity?: string | null;
  slug?: string | null;
  title?: string | null;
}

export default function useContent(target: string) {
  const [content, setContent] = useState<IContentInfo[]>([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content }
}
