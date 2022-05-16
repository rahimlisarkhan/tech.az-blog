import { db } from "config/firebase";
import { ref, set, push } from "firebase/database";

export const writeData = (collection: string, data: any, unique = false) => {
  const write = unique ? push : set;

  write(ref(db, collection), data);
};
