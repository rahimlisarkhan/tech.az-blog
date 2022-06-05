import { METHOD } from "shared/constant/method";
import { Axios } from "shared/utils/axios";

export const apiPageContents = (url: string, params: any = null) =>
  Axios({ url, method: METHOD.GET, params });