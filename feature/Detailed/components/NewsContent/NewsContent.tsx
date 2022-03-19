import { Fragment } from "react"
import { NewsContentStyled, SuggestedContentStyled, VideoContent, ImageContent, SimilarNewsContentStyled } from "./NewsContent.styled"
import TitleContent from "../../components/TitleContent";
import Image from "../../../../shared/components/Image"
import TypographyText from "../../../../shared/components/Typograph";
import ReactPlayer from "react-player";
import SliderContent from "../../../../shared/components/Slider"
import NewsCard from "../../../News/components/NewsCard"
import NewsImageSlider from "../../components/NewsImageSlider"
import { useSelector } from "../../../../shared/hooks/useSelector";
import { useMediaQuery } from 'react-responsive'
import { breakpoint } from "../../../../styles/breakpoint";
import { Grid } from "@mui/material";
import { url } from "../../../../shared/utils/axios";

export const NewsContent = ({ newsSlug, newsData }: any) => {

    const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop })

    console.log(newsSlug);

    let appMode = useSelector(state => state.home.appMode)

    let similarData = newsData?.filter((item) => {
        if (item.tag.findIndex(x => x.title === newsSlug?.tag[0].title) && item.id !== newsSlug.id) {
            return true
        }
        return false
    })

    const colorMode = () => {
        if (appMode) {
            return "black"
        }

        return "white"
    }

    return (
        <Fragment>
            <NewsContentStyled>
                <TitleContent newsSlug={newsSlug} />
                <ImageContent>
                <Image cover="true" src={url + newsSlug?.cover_image} height="500" alt="news name" />
                </ImageContent>
                <TypographyText font="18" color={colorMode()}>
                    {newsSlug?.content.slice(0, 1800)}
                </TypographyText>
                {newsSlug?.video_link &&
                    <VideoContent>
                        <ReactPlayer url={newsSlug?.video_link} />
                    </VideoContent>}
                <TypographyText font="18" color={colorMode()}>
                    {newsSlug?.content.slice(1800, 3000)}
                </TypographyText>
                {newsSlug?.news_images?.length && <NewsImageSlider url={url} images={newsSlug?.news_images || newsSlug?.videos_images} />}
                <TypographyText font="18" color={colorMode()}>
                    {newsSlug?.content.slice(3000)}
                </TypographyText>
            </NewsContentStyled>

            <SuggestedContentStyled desktop={isDesktopOrLaptop ? "true" : ""}>
                <TypographyText font="20" color={colorMode()} bold="true">
                    Son yükləmələr
                </TypographyText>
                <Grid container={true}>
                    {newsData?.filter(item => item.id !== newsSlug.id)?.map((news, index) => {
                        if (index < 10) {
                            return <NewsCard sm={6} key={`last-upload-${index}`} height={200} {...news} />
                        }
                    })}
                </Grid>
            </SuggestedContentStyled>
            <SimilarNewsContentStyled>
                <TypographyText font="20" color={colorMode()} bold="true">
                    Oxşar yükləmələr
                </TypographyText>
                <SliderContent data={similarData} slidesToShow={3} content={(item) => <NewsCard height={270} {...item} />} />
            </SimilarNewsContentStyled>
        </Fragment>
    )
}