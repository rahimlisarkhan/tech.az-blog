import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useRequest } from "./useRequest";
import { apiConfig } from "api/config";
import { useEffect, useState } from "react";
import { firebaseConfig } from "config/firebase";

export const useFirebaseConnect = () => {
  const [config, setConfig] = useState(null);

  const { exc: configExc } = useRequest(() => apiConfig(), {
    onSuccess(res) {
      console.log(res);
      // dispatch(fillConfig(config));
    },
  });

  useEffect(() => {
    configExc();
  }, []);

  // if (!firebaseConfig) return;

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth: any = getAuth();

  return { db, auth };
};
