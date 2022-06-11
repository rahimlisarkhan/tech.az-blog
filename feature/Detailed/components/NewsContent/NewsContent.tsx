import { Fragment, useMemo } from "react";
import {
  NewsContentStyled,
  SuggestedContentStyled,
  VideoContent,
  ImageContent,
  SimilarNewsContentStyled,
} from "./NewsContent.styled";
import { Image } from "ui/Image";
import Typography from "ui/Typograph";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import { breakpoint } from "styles/breakpoint";
import { Grid } from "@mui/material";
import { url } from "shared/utils/axios";
import { useScreenMode } from "shared/hooks/useScreenMode";
import { NewsType } from "types/news";
import { Motion } from "ui/Motion";

import dynamic from "next/dynamic";
import { MobileCard } from "feature/News/components/MobileCard";

const NewsImageSlider = dynamic(
  () => import("../../components/NewsImageSlider")
);
const SliderContent = dynamic(() => import("ui/Slider"));
const TitleContent = dynamic(() => import("../../container/TitleContent"));
const NewsCard = dynamic(() => import("../../../News/components/NewsCard"));

type Props = {
  newsData: NewsType[];
  newsSlug: NewsType;
  isStatusData: string;
};

export const NewsContent = ({ newsSlug, newsData, isStatusData }: Props) => {
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
          <Typography font="18" color={colorMode()} innerHTML>
            {newsSlug?.content.slice(0, 1800)}
          </Typography>
          {newsSlug?.video_link && (
            <VideoContent>
              <ReactPlayer url={newsSlug?.video_link} playing loop controls />
            </VideoContent>
          )}
          <Typography font="18" color={colorMode()} innerHTML>
            {newsSlug?.content.slice(1800, 3000)}
          </Typography>
          {newsSlug?.news_images?.length ? (
            <NewsImageSlider
              imageSize={isDesktopOrLaptop ? 400 : 200}
              url={url}
              images={newsSlug?.news_images || newsSlug?.videos_images}
            />
          ) : (
            ""
          )}
          <Typography font="18" color={colorMode()} innerHTML>
            {newsSlug?.content.slice(3000)}
          </Typography>
        </NewsContentStyled>
      </Motion>

      {isStatusData === "isSuccess" && (
        <>
          <SuggestedContentStyled desktop={isDesktopOrLaptop ? "true" : ""}>
            <Typography font="20" color={colorMode()} bold>
              Son yükləmələr
            </Typography>
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

          {similarData?.length && (
            <SimilarNewsContentStyled>
              <Typography font="20" color={colorMode()} bold>
                Oxşar yükləmələr
              </Typography>
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
        </>
      )}
    </Fragment>
  );
};
