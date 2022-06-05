import { realTimeData } from "db/realTimeData";
import { writeData } from "db/writeData";
import { useEffect } from "react";
import { useFirebaseConnect } from "./useFirebaseConnect";

export const useFirebase = ({ collection, unique, onData }) => {
  const { db } = useFirebaseConnect();

  useEffect(() => {
    realTimeData(db, collection, (data: any) => {
      onData?.(data);
    });
  }, []);

  const fireRequest = (data: any) => {
    writeData(db,collection, data, unique);
  };

  return { fireRequest };
};
