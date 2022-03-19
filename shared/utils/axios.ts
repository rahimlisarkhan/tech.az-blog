import axios from "axios";

export const url = "https://backend.tech.az";
const baseURL = `${url}/api/`;

export const Axios = axios.create({
  baseURL,
  timeout: 60000,
});
