import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { fillConfig, stateConfig } from "shared/store/slices/user/userSlices";
// import { useSelector } from "./useSelector";
import { getAuth } from "firebase/auth";
// import { useRequest } from "./useRequest";
// import { apiConfig } from "api/config";
// import { useDispatch } from "./useDispatch";
// import { useEffect } from "react";
import { firebaseConfig } from "config/firebase";

export const useFirebaseConnect = () => {
  // const firebaseConfig = useSelector(stateConfig);
  // const dispatch = useDispatch();

  // const { exc: configExc } = useRequest(() => apiConfig(), {
  //   onSuccess({ data: { config } }) {
  //     dispatch(fillConfig(config));
  //   },
  // });

  // useEffect(() => {
  //   configExc();
  // }, []);

  // if (!firebaseConfig) return;

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth: any = getAuth();

  return { db, auth };
};
