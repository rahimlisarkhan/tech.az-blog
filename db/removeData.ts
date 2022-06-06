import { ref, child, remove } from "firebase/database";

export const removeData = (db: any, collection: string, data: any) => {
  remove(child(ref(db, collection), data));
};
