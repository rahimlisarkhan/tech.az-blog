import { Axios } from "./axios";

export const fillToken = (token: string) => {
  if (!token) {
    localStorage.removeItem("access_token");
    return;
  }

  Axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  localStorage.setItem("access_token", token);
};
