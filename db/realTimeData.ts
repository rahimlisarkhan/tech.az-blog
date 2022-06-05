import { ref, onValue } from "firebase/database";

export const realTimeData = (db:any,collection: string, onSuccess: any): any => {
  let data = null;
  const listeningRef = ref(db, collection);
  onValue(listeningRef, (snapshot) => {
    data = snapshot.val()
    onSuccess?.(data);
  });
};
