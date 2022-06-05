import { realTimeData } from "db/realTimeData";
import { writeData } from "db/writeData";
import { useEffect } from "react";
import { useFirebaseConnect } from "./useFirebaseConnect";

export const useFirebase = ({ collection, unique, onData }: any) => {
  const { db } = useFirebaseConnect();

  useEffect(() => {
    realTimeData(db, collection, (data: any) => {
      onData?.(data);
    });
  }, []);

  const fireRequest = (col:string, data: any) => {
    writeData(db, col, data, unique);
  };

  return { fireRequest };
};
