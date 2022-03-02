import axios from "axios"

const baseURL = "http://62.212.239.74/api/"

export const Axios = axios.create({
    baseURL,
    timeout: 60000,
})