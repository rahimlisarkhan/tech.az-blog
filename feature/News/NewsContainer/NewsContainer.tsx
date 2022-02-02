import { NewsContainerStyled, MoreNewsContent, MoreButton } from "./NewsContainer.styled"
import NewsCard from "../components/NewsCard"


export const NewsContainer = ({data}:any) => {

    return (
        <NewsContainerStyled>
            {data?.map((item,index)=>{
                if(index === 0){
                    return <NewsCard key={`mixnews-id-${item.id}`} col={12} height="460" {...item} />
                }

                if(index === 3 || index === 4 || index === 5 ||
                    index === 8 || index === 9 || index === 10 ||
                    index === 13 || index === 14 || index === 15){
                    return <NewsCard key={`mixnews-id-${item.id}`} col={4} height="468"  {...item} />
                }

                return <NewsCard key={`mixnews-id-${item.id}`} col={6}  {...item} />

            })}
            <MoreNewsContent>
                <MoreButton>
                     See 10 more news
                </MoreButton>
            </MoreNewsContent>
        </NewsContainerStyled>
    )
}