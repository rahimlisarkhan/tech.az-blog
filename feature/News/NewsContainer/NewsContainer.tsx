import { NewsContainerStyled, MoreNewsContent, MoreButton } from "./NewsContainer.styled"
import NewsCard from "../components/NewsCard"
import { getMixNews } from "../../../services/MixNews"
import { useEffect, useState } from "react"
import Loading from "../../../components/Loading"
import { useSelector } from "../../../hooks/useSelector"
import { fillAppMode } from "../../../store/slices/home/homeSlices"
import { useDispatch } from "../../../hooks/useDispatch"

export const NewsContainer = ({ newsData, nextPage }: any) => {
    let appMode = useSelector(state => state.home.appMode)
    let dispatch = useDispatch()

    console.log(newsData);


    useEffect(() => {
        dispatch(fillAppMode())
    }, [])


    let [data, setData] = useState(newsData)

    let [nextPageCount, setNextPageCount] = useState(1)
    let [nextPageUrl, setNextPageUrl] = useState(nextPage)
    let [loading, setLoading] = useState(false)


    const onPage = async () => {
        setLoading(true)
        setNextPageCount(prev => nextPageUrl && prev + 1)

        let res = await getMixNews(nextPageCount)

        if (res) {
            setLoading(false)
            // setData([...data, ...res.data.results])
            console.log(res.data.next);
            
            setNextPageUrl(res.data.next)
        }
    }

    return (
        <NewsContainerStyled>
            {loading && <Loading />}
            {data?.map((item, index) => {
                if (index === 0) {
                    return <NewsCard key={`mixnews-id-${item.id}`} col={12} height="460" {...item} />
                }

                if (index === 3 || index === 4 || index === 5 ||
                    index === 8 || index === 9 || index === 10 ||
                    index === 13 || index === 14 || index === 15) {
                    return <NewsCard key={`mixnews-id-${item.id}`} col={4} height="468"  {...item} />
                }

                return <NewsCard key={`mixnews-id-${item.id}`} col={6}  {...item} />

            })}

            <MoreNewsContent>
                <MoreButton disabled={nextPage ? false : true} mode={appMode ? "true" : ""} onClick={onPage}>
                    Daha 10 xəbər
                </MoreButton>
            </MoreNewsContent>
        </NewsContainerStyled>
    )
}