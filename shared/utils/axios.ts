import axios from "axios";

export const url = "https://usaqhakatonu.az";
export const baseURL = `${url}/api/`;


export const Axios = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
