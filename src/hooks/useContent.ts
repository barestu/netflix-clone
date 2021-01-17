import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { IContent } from '../types/shape'

export default function useContent(target: string) {
  const [content, setContent] = useState<IContent[]>([]);
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
