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
import FavoriteIcon from "@mui/icons-material/Favorite";

import { CommentContent } from "../CommentContent";

import dynamic from "next/dynamic";
import { MobileCard } from "feature/News/components/MobileCard";
import { IconButton } from "shared/components/IconButton";
import { firebasePatch } from "shared/constant/patch";

const NewsImageSlider = dynamic(
  () => import("../../components/NewsImageSlider")
);
const SliderContent = dynamic(() => import("shared/components/Slider"));
const TitleContent = dynamic(() => import("../TitleContent"));
const NewsCard = dynamic(() => import("../../../News/components/NewsCard"));

type Props = {
  newsData: NewsType[];
  similarData: NewsType[];
  newsSlug: NewsType;
  addRemoveLike: (data: any) => void;
  addComment: (data: any) => void;
  userID: string | number;
  newsReaction: any;
};

export const NewsContent = ({
  newsSlug,
  newsData,
  similarData,
  userID,
  addRemoveLike,
  newsReaction,
  addComment,
}: Props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });
  const isMobile = useMediaQuery({ minWidth: breakpoint.mobile });

  let { colorMode } = useScreenMode();

  const reaction = useMemo(() => {
    return newsReaction?.find((news) => news.user_id === userID);
  }, [newsReaction]);

  const handleCommentLike = () => {
    addRemoveLike({
      news_id: newsSlug.slug,
      user_id: reaction ? null : userID,
      like_id: reaction?.id,
      collection: firebasePatch.connect_reactions,
    });

    console.log({
      news_id: newsSlug.slug,
      user_id: reaction ? null : userID,
      like_id: reaction?.id,
      collection: firebasePatch.connect_reactions,
    });
  };

  return (
    <Fragment>
      <Motion>
        <NewsContentStyled>
          <TitleContent newsSlug={newsSlug} reactionCount={newsReaction?.length} />
          <ImageContent>
            <Image
              src={url + newsSlug?.cover_image}
              height={isDesktopOrLaptop ? "400" : "200"}
              alt="news name"
              cover
            />
            <IconButton
              cursor
              color={reaction ? "green" : "whiteGray"} 
              content={reaction ? "bəyəndim" : "bəyən"} 
              text={reaction ? "green" : "whiteGray"} 
              margin="2px 10px"
              onClick={handleCommentLike}
            >
              <FavoriteIcon />
            </IconButton>
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
          <CommentContent
            slug={newsSlug?.slug}
            addRemoveLike={addRemoveLike}
            addComment={addComment}
          />
        </NewsContentStyled>
      </Motion>
      {newsData && (
        <>
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
          {similarData?.length && (
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
        </>
      )}
    </Fragment>
  );
};
