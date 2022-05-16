import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { status_req } from "shared/constant/status";
import { baseURL } from "shared/utils/axios";

interface useRequestType {
  url: string;
  config?: {
    method?: string;
    data?: any;
    params?: any;
    onSuccess?: (res: any) => void;
    onError?: (res: any) => void;
  };
}

export const useRequest = <T extends useRequestType>(
  url: T["url"],
  { onSuccess, onError, method, data, params }: T["config"]
) => {
  const [status, setStatus] = useState("");
  const mountedRef = useRef(false);

  useEffect((): any => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);

  const axiosConfig: any = {
    method: method ?? "get",
    url: baseURL + url,
    data,
    params,
  };

  const executed = () => {
    setStatus(status_req.isPending);
    axios(axiosConfig)
      .then((res) => {
        if (!mountedRef.current) return;
        setStatus(status_req.isSuccess);
        onSuccess?.(res?.data);
      })
      .catch((err) => {
        if (!mountedRef.current) return;
        setStatus(status_req.isError);
        onError?.(err);
      });
  };

  return { exc: executed, isStatus: status };
};
