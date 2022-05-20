import { db } from "config/firebase";
import { ref, onValue } from "firebase/database";

export const realTimeData = (collection: string, onSuccess: any): any => {
  let data = null;
  const listeningRef = ref(db, collection);
  onValue(listeningRef, (snapshot) => {
    // data = Object.entries(snapshot.val()).map((item) => ({
    //   id: item[0],
    //   ...item[1],
    // }));
    data = snapshot.val()
    onSuccess?.(data);
  });
};
