import { Axios, mock } from "../mock";
import news from "../mock/news.json"
import news1 from "../mock/newsNext.json"
import newsSlug from "../mock/newsSlug.json"
import { toast } from 'react-toastify';

mock.onGet("/mixdata").reply(config => {
    return [200, { message: 'OK', result: news }]

});

mock.onGet("/mixdata/offset").reply(config => {
    return [200, { message: 'OK', result: {news:news1} }]

});

mock.onGet("/mixdata/slug").reply(config => {
    return [200, { message: 'OK', result:newsSlug }]

});

export const getMixNews = async (offpage?: number) => {

    let url = offpage ? `/mixdata/offset` : "/mixdata"

    try {
        const res = await Axios.get(url)

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}


export const getMixNewsSlug = async (slug) => {

    let url = `/mixdata/slug`

    try {
        const res = await Axios.get(url)

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}
