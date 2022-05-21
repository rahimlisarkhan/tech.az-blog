import { realTimeData } from "db/realTimeData";
import { writeData } from "db/writeData";
import { useEffect } from "react";

export const useFirebase = ({ collection, unique, onData }) => {
  useEffect(() => {
    realTimeData(collection, (data: any) => {
      onData?.(data);
    });
  }, []);

  const fireRequest = (data: any) => {
    writeData(collection, data, unique);
  };

  return { fireRequest };
};
