import { METHOD } from "shared/constant/method";
import { apiPatch } from "shared/constant/patch";
import { Axios } from "shared/utils/axios";

export const apiUserProfile = () => {
  let token = localStorage.getItem("access_token");

  if (!token) return new Promise(() => {});

  return Axios({
    url: apiPatch.profile,
    method: METHOD.GET,
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};
