import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "config/firebase";

export const useFirebaseConnect = () => {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth: any = getAuth();

  return { db, auth };
};
