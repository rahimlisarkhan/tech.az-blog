import { ref, onValue,query,orderByChild } from "firebase/database";

export const realTimeData = (db:any,collection: string, onSuccess: any): any => {
  let data = null;
  const listeningRef = query(ref(db, collection),orderByChild("created_at"))
  onValue(listeningRef, (snapshot) => {
    data = snapshot.val()
    onSuccess?.(data);
  });
};
