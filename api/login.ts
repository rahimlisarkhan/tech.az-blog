import axios from "axios";
import { baseURL } from "shared/utils/axios";

export const apiLogin = (data) => {
  console.log("login", data);

  axios({ url: baseURL + "user/login", method: "POST", data });
};
