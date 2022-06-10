import { useEffect, useRef, useState } from "react";
import { status_req } from "shared/constant/status";

interface useRequestType {
  req?: (data: any) => any;
  config?: {
    onSuccess?: (res: any) => void;
    onError?: (res: any) => void;
  };
}

export const useRequest = <T extends useRequestType>(
  req: T["req"],
  { onSuccess, onError }: T["config"]
) => {
  const [status, setStatus] = useState("");
  const mountedRef = useRef(false);

  useEffect((): any => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);

  const executed = (data: any = null) => {
    if (!mountedRef.current) return;

    setStatus(status_req.isPending);

    req(data)
      .then((res: any) => {
        setStatus(status_req.isSuccess);
        onSuccess?.(res?.data);
      })
      .catch((err: any) => {
        setStatus(status_req.isError);
        onError?.(err);
      });
  };

  return { exc: executed, isStatus: status };
};
