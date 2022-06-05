import axios from "axios";
import { METHOD } from "shared/constant/method";
import { apiPatch } from "shared/constant/patch";

export const apiConfig = () =>
  axios({ url: apiPatch.config, method: METHOD.GET});


