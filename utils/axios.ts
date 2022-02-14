import axios from "axios"

const baseURL = "http://34.125.112.115/api/"

export const Axios = axios.create({
    baseURL,
    timeout: 60000,
})