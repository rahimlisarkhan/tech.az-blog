import { Fragment, useMemo } from "react";
import {
  NewsContentStyled,
  SuggestedContentStyled,
  VideoContent,
  ImageContent,
  SimilarNewsContentStyled,
} from "./NewsContent.styled";
import { Image } from "shared/components/Image";
import TypographyText from "shared/components/Typograph";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import { breakpoint } from "styles/breakpoint";
import { Grid } from "@mui/material";
import { url } from "shared/utils/axios";
import { useScreenMode } from "shared/hooks/useScreenMode";
import { NewsType } from "types/news";
import { Motion } from "shared/components/Motion";

import dynamic from "next/dynamic";
import { MobileCard } from "feature/News/components/MobileCard";

const NewsImageSlider = dynamic(
  () => import("../../components/NewsImageSlider")
);
const SliderContent = dynamic(() => import("shared/components/Slider"));
const TitleContent = dynamic(() => import("../../components/TitleContent"));
const NewsCard = dynamic(() => import("../../../News/components/NewsCard"));

type Props = {
  newsData: NewsType[];
  newsSlug: NewsType;
};

export const NewsContent = ({ newsSlug, newsData }: Props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });
  const isMobile = useMediaQuery({ minWidth: breakpoint.mobile });

  let { colorMode } = useScreenMode();

  let similarData = useMemo(
    () =>
      newsData?.filter((item: NewsType) => {
        if (
          item?.tag.findIndex((x) => x?.title === newsSlug?.tag[0]?.title) !==
            -1 &&
          item?.id !== newsSlug?.id
        ) {
          return true;
        }
        return false;
      }),
    [newsSlug?.id, newsData]
  );

  return (
    <Fragment>
      <Motion>
        <NewsContentStyled>
          <TitleContent newsSlug={newsSlug} />
          <ImageContent>
            <Image
              src={url + newsSlug?.cover_image}
              height={isDesktopOrLaptop ? "400" : "200"}
              alt="news name"
              cover
            />
          </ImageContent>
          <TypographyText font="18" color={colorMode()} innerHTML>
            {newsSlug?.content.slice(0, 1800)}
          </TypographyText>
          {newsSlug?.video_link && (
            <VideoContent>
              <ReactPlayer url={newsSlug?.video_link} playing loop controls />
            </VideoContent>
          )}
          <TypographyText font="18" color={colorMode()} innerHTML>
            {newsSlug?.content.slice(1800, 3000)}
          </TypographyText>
          {newsSlug?.news_images?.length ? (
            <NewsImageSlider
              imageSize={isDesktopOrLaptop ? 400 : 200}
              url={url}
              images={newsSlug?.news_images || newsSlug?.videos_images}
            />
          ) : (
            ""
          )}
          <TypographyText font="18" color={colorMode()} innerHTML>
            {newsSlug?.content.slice(3000)}
          </TypographyText>
        </NewsContentStyled>
      </Motion>

      {newsData && (
        <SuggestedContentStyled desktop={isDesktopOrLaptop ? "true" : ""}>
          <TypographyText font="20" color={colorMode()} bold="true">
            Son yükləmələr
          </TypographyText>
          <Grid container={true}>
            {newsData
              ?.filter((item) => item.id !== newsSlug.id)
              ?.map((news, index) => {
                if (index < 5) {
                  return isDesktopOrLaptop ? (
                    <NewsCard
                      sm={6}
                      key={`last-upload-${index}`}
                      height={"210"}
                      {...news}
                    />
                  ) : (
                    <MobileCard
                      key={`mobile-last-upload-${index}`}
                      col={12}
                      {...news}
                      height="120"
                    />
                  );
                }
              })}
          </Grid>
        </SuggestedContentStyled>
      )}
      {similarData && similarData?.length && (
        <SimilarNewsContentStyled>
          <TypographyText font="20" color={colorMode()} bold="true">
            Oxşar yükləmələr
          </TypographyText>
          <SliderContent
            data={similarData}
            slidesToShow={similarData.length <= 2 ? 1 : 3}
            content={(item) => (
              <NewsCard
                height={similarData.length <= 2 ? 420 : 220}
                {...item}
                mobilemargin={isMobile ? "true" : ""}
              />
            )}
          />
        </SimilarNewsContentStyled>
      )}
    </Fragment>
  );
};
