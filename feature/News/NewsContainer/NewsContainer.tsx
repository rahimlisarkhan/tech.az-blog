import { NewsContainerStyled, MoreNewsContent, MoreButton } from "./NewsContainer.styled"
import NewsCard from "../components/NewsCard"
import { getMixNews } from "../../../services/MixNews"
import { useEffect, useState } from "react"
import Loading from "../../../components/Loading"
import { useSelector } from "../../../hooks/useSelector"
import { fillAppMode } from "../../../store/slices/home/homeSlices"
import { useDispatch } from "../../../hooks/useDispatch"

export const NewsContainer = ({ newsData }: any) => {
    let appMode = useSelector(state => state.home.appMode)
    let dispatch = useDispatch()

    useEffect(() =>{
      dispatch(fillAppMode())
    },[])

    
    let [data, setData] = useState(newsData)

    let [nextPageCount, setNextPageCount] = useState(1)
    let [loading, setLoading] = useState(false)

    const onPage = async () => {
        setLoading(true)
        setNextPageCount(prev => prev += 1)

        let { data: { result: { news } } } = await getMixNews(nextPageCount)

        if (news) {
            setLoading(false)
            setData([...data, ...news.news])
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
                <MoreButton mode={appMode ? "true" : ""} onClick={onPage}>
                    Daha 10 xəbər
                </MoreButton>
            </MoreNewsContent>
        </NewsContainerStyled>
    )
}