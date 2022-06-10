import { METHOD } from "shared/constant/method";
import { apiPatch } from "shared/constant/patch";
import { Axios } from "shared/utils/axios";

export const apiLogin = (data: any) =>
  Axios({ url: apiPatch.login, method: METHOD.POST, data });

export const apiRegister = (data: any) =>
  Axios({ url: apiPatch.register, method: METHOD.POST, data });

export const apiJoin = async (data: any) => {
  return Axios({ url: apiPatch.join, method: METHOD.POST, data });
};
