import { realTimeData } from "db/realTimeData";
import { removeData } from "db/removeData";
import { writeData } from "db/writeData";
import { useEffect } from "react";
import { useFirebaseConnect } from "./useFirebaseConnect";

export const useFirebase = ({ collection, unique, onData }: any) => {
  const { db } = useFirebaseConnect();

  useEffect(() => {
    realTimeData(db, collection, (data: any) => {
      onData?.(data);
    });
  }, [collection]);

  const deleteRequest = (col, id:string) => {
    removeData(db, col, id);
  };

  const fireRequest = (col: string, data: any) => {
    writeData(db, col, data, unique);
  };

  return { fireRequest,deleteRequest };
};
