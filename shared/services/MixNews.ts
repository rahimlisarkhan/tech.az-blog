import { toast } from 'react-toastify';
import { Axios } from '../utils/axios';


export const getDataNews = async (patch:string | null,offpage:string | null) => {

    let url = offpage ? offpage : patch

    try {
        const res = await Axios.get(url)

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}


export const getNewsSlug = async (query) => {


    let url = `/${query[0]}/${query[1]}`
    try {
        const res = await Axios.get(url)

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}


export const addJoin =  async (form) => {

    try {
        const res = await Axios.post("/join/",form)
        
        toast.success("Uğurlu əməliyyat!")
    } catch ({ message }) {
        toast.error("Zəhmət olmasa xanaları düzgün doldurun...")
    }
}