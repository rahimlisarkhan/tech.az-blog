import { METHOD } from "shared/constant/method";
import { apiPatch } from "shared/constant/patch";
import { Axios } from "shared/utils/axios";

export const resultSearchApi = (search: string) =>
  Axios({
    url: apiPatch.search,
    method: METHOD.GET,
    params: {
      search,
      limit: 30,
    },
  });
