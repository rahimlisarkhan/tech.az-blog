import { Fragment } from "react"
import { NewsContentStyled, SuggestedContentStyled, VideoContent,ImageContent } from "./NewsContent.styled"
import TitleContent from "../../components/TitleContent";
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph";
import ReactPlayer from "react-player";
import NewsCard from "../../../News/components/NewsCard"
import NewsImageSlider from "../../components/NewsImageSlider"
import { useSelector } from "../../../../hooks/useSelector";

export const NewsContent = () => {

  let newsData = useSelector(state => state.home.mixNews)
  let newsSlug = useSelector(state => state.home.newsSlug)
  let appMode = useSelector(state => state.home.appMode)

  
  const colorMode = () => {
      if(appMode){
          return "black"
      }

      return "white"
  }


    return (
        <Fragment>
            <NewsContentStyled>
                <TitleContent />
                <ImageContent>
                    <Image cover="true" src={newsSlug?.cover_image} height="500" alt="news name" />
                </ImageContent>
                <TypographyText font="18" color={colorMode()}>
                    {newsSlug?.content.slice(0,1800)}
                </TypographyText>
                <VideoContent>
                    <ReactPlayer  url={newsSlug?.video_link} />
                </VideoContent>    
                <TypographyText font="18" color={colorMode()}>
                    {newsSlug?.content.slice(1800,3000)}
                </TypographyText>
                <NewsImageSlider images={newsSlug?.news_images}/>
                <TypographyText font="18" color={colorMode()}>
                    {newsSlug?.content.slice(3000)}
                </TypographyText>
            </NewsContentStyled>
            
            <SuggestedContentStyled>
                <TypographyText font="20" color={colorMode()} bold="true">
                    Son yuklemeler
                </TypographyText>
                {newsData?.map((news,index)=>{
                    if(index < 5){
                        return <NewsCard height={200} {...news}/>
                    }
                })}
            </SuggestedContentStyled>
        </Fragment>
    )
}