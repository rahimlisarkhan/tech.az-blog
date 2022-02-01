import { NewsContainerStyled } from "./NewsContainer.styled"
import  NewsCard  from "../components/NewsCard"


export const NewsContainer = () => {

    return(
        <NewsContainerStyled>
            <NewsCard col={12} height="460"/>
            <NewsCard col={6}/>
            <NewsCard col={6}/>
            <NewsCard col={6}/>
            <NewsCard col={6}/>
            <NewsCard col={6}/>
            <NewsCard col={6}/>
            <NewsCard col={6}/>
            <NewsCard col={6}/>
        </NewsContainerStyled>
    )
}