import { Axios, mock } from "../mock";
import news from "../mock/news.json"
import { toast } from 'react-toastify';

mock.onGet("/mixdata").reply(config => {
    return [200, { message: 'OK', result: news }]

});


export const getMixNews = async () => {

    try {
        const res = await Axios.get("/mixdata")
        console.log(res);
        
        return res
    } catch ({ message }) {
        toast.error(message)
    }
}
