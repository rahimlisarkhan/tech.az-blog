import { NewsContainerStyled, MoreNewsContent } from "./NewsContainer.styled"
import NewsCard from "../components/NewsCard"
import { getDataNews } from "../../../services/MixNews"
import { useEffect, useState } from "react"
import Loading from "../../../components/Loading"
import { useSelector } from "../../../hooks/useSelector"
import { fillAppMode } from "../../../store/slices/home/homeSlices"
import { useDispatch } from "../../../hooks/useDispatch"
import ButtonOutlined from "../../../components/ButtonOutlined"
import { useRouter } from "next/router"
import Grow from '@mui/material/Grow';
export const NewsContainer = ({ newsData, nextPage }: any) => {
    let appMode = useSelector(state => state.home.appMode)
    let { pathname } = useRouter()
    let dispatch = useDispatch()
    let [data, setData] = useState(newsData)
    let [nextPageUrl, setNextPageUrl] = useState(nextPage)
    let [loading, setLoading] = useState(false)


    useEffect(() => {
        dispatch(fillAppMode())
    }, [])


    const renderTypeName = () => {
        switch (pathname) {
            case "/article":
                return "məqalə"
            case "/video":
                return "video"
            default:
                return "xəbər"
        }
    }


    const onPage = async () => {
        setLoading(true)

        console.log(nextPageUrl);

        if (!nextPageUrl) {
            setLoading(false)
            return
        }

        let res = await getDataNews(null, nextPageUrl?.split("api")[1])

        if (res) {
            setLoading(false)
            setData([...data, ...res.data.results])
            setNextPageUrl(res.data.next)
        }
    }


    return (
        <NewsContainerStyled>
            {loading && <Loading />}
       

            
            {data?.map((item, index) => {
                if (index === 0) {
                    return <NewsCard key={`mixnews-id-${index}`} col={12} height="460" {...item} />
                }

                if (index === 3 || index === 4 || index === 5 ||
                    index === 8 || index === 9 || index === 10 ||
                    index === 13 || index === 14 || index === 15) {
                    return <NewsCard key={`mixnews-id-${index}`} col={4} height="468"  {...item} />
                }
                return <NewsCard key={`mixnews-id-${index}`} col={6}  {...item} />

            })}

        <Grow
                in={true}
                style={{ transformOrigin: '0 0 10' }}
                timeout={2000}
            >
            <MoreNewsContent>
                <ButtonOutlined disabled={nextPageUrl ? false : true} mode={appMode ? "true" : ""} onClick={onPage}>
                    {nextPageUrl ? `Daha 10 ${renderTypeName()}` : `Daha ${renderTypeName()} yoxdur`}
                </ButtonOutlined>
            </MoreNewsContent>
            </Grow>

        </NewsContainerStyled>
    )
}