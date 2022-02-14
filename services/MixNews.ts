// import { Axios, mock } from "../mock";
// import news from "../mock/news.json"
// import news1 from "../mock/newsNext.json"
// import newsSlug from "../mock/newsSlug.json"
import { toast } from 'react-toastify';
import { Axios } from '../utils/axios';

// mock.onGet("/mixdata").reply(config => {
//     return [200, { message: 'OK', result: news }]

// });

// mock.onGet("/mixdata/offset").reply(config => {
//     return [200, { message: 'OK', result: { news: news1 } }]

// });

// mock.onGet("/mixdata/slug").reply(config => {
//     return [200, { message: 'OK', result: newsSlug }]

// });

export const getMixNews = async (offpage: number = 1) => {

    let url = `/mixdata/?limit=3&offset=${offpage}`

    try {
        const res = await Axios.get(url)

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}


export const getNewsSlug = async (query) => {


    let url = `/${query[0]}/${query[1]}`
    console.log(url);

    try {
        const res = await Axios.get(url)

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}
