import { Fragment } from "react"
import { NewsContentStyled, SuggestedContentStyled, VideoContent } from "./NewsContent.styled"
import TitleContent from "../../components/TitleContent";
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph";
import ReactPlayer from "react-player";
import NewsCard from "../../../News/components/NewsCard"

export const NewsContent = () => {
    return (
        <Fragment>
            <NewsContentStyled>
                <TitleContent />
                <Image cover="true" src="https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg" height="500" alt="news name" />
                <TypographyText font="18" color="white">
                    В сети появились фотографии четырёх новых расцветок New Balance 2002R. Предполагается, что в продажу кроссовки поступят весной или летом этого года.
                    Модель 2002 была выпущена в 2010 году, но популярность получила спустя десять лет. 2002R — обновлённая версия с улучшенной амортизацией и сетчатыми вставками для вентиляции.
                    Кроссовки появятся в четырёх цветах: зелёном, тёмно-голубом, насыщенном розовом и лавандовом.
                </TypographyText>
                <VideoContent>
                    <ReactPlayer  url="https://www.youtube.com/watch?v=6p3U-uWUNps" />
                </VideoContent>    
                <TypographyText font="18" color="white">
                    В сети появились фотографии четырёх новых расцветок New Balance 2002R. Предполагается, что в продажу кроссовки поступят весной или летом этого года.
                    Модель 2002 была выпущена в 2010 году, но популярность получила спустя десять лет. 2002R — обновлённая версия с улучшенной амортизацией и сетчатыми вставками для вентиляции.
                    Кроссовки появятся в четырёх цветах: зелёном, тёмно-голубом, насыщенном розовом и лавандовом.
                    Модель 2002 была выпущена в 2010 году, но популярность получила спустя десять лет. 2002R — обновлённая версия с улучшенной амортизацией и сетчатыми вставками для вентиляции.
                    Кроссовки появятся в четырёх цветах: зелёном, тёмно-голубом, насыщенном розовом и лавандовом.
                </TypographyText>
            </NewsContentStyled>
            
            <SuggestedContentStyled>
                <TypographyText font="20" color="white" bold="true">
                    Son yuklemeler
                </TypographyText>
                <NewsCard height="200" />
                <NewsCard height="200" />
                <NewsCard height="200" />
                <NewsCard height="200" />
                <NewsCard height="200" />
            </SuggestedContentStyled>
        </Fragment>
    )
}