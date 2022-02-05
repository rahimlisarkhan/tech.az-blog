import { NewsContainerStyled, MoreNewsContent, MoreButton } from "./NewsContainer.styled"
import NewsCard from "../components/NewsCard"
import { getMixNews } from "../../../services/MixNews"
import { useState } from "react"
import { useDispatch } from "../../../hooks/useDispatch"
import { fillMixData } from "../../../store/slices/home/homeSlices"

export const NewsContainer = ({ data }: any) => {
    let dispatch = useDispatch()

    let [nextPageCount, setNextPageCount] = useState(1)
    let [loading, setloading] = useState(false)

    const onPage = async () => {
        setNextPageCount(prev => prev += 1)

        let { data: { result: { news } } } = await getMixNews(nextPageCount)
        console.log(news.news);

        dispatch(fillMixData(news.news))

    }

    return (
        <NewsContainerStyled>

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

            {/* {loading && <h1>Loading...</h1> } */}
            <MoreNewsContent>
                <MoreButton onClick={onPage}>
                    See 10 more news
                </MoreButton>
            </MoreNewsContent>
        </NewsContainerStyled>
    )
}