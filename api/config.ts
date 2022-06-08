import { METHOD } from "shared/constant/method";
import { apiPatch } from "shared/constant/patch";
import { Axios } from "shared/utils/axios";

export const apiConfig = () =>
  Axios({ url: apiPatch.config, method: METHOD.GET});


