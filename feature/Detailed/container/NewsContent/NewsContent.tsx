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
import { useMediaQuery } from "react-responsive";
import { breakpoint } from "styles/breakpoint";
import { Grid } from "@mui/material";
import { url } from "shared/utils/axios";
import { useScreenMode } from "shared/hooks/useScreenMode";
import { NewsType } from "types/news";
import { Motion } from "ui/Motion";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { CommentContent } from "../CommentContent";

import dynamic from "next/dynamic";
import { MobileCard } from "feature/News/components/MobileCard";
import { IconButton } from "ui/IconButton";
import { firebasePatch } from "shared/constant/patch";
import { toast } from "react-toastify";
import { useDispatch } from "shared/hooks";
import { openReactionModal } from "shared/store/slices/modal/modalSlices";
import { fillReactionUsers } from "shared/store/slices/comment/commentSlices";
// import ReactPlayer from "react-player";

const NewsImageSlider = dynamic(
  () => import("../../components/NewsImageSlider")
);
const SliderContent = dynamic(() => import("ui/Slider"));
const TitleContent = dynamic(() => import("../TitleContent"));
const NewsCard = dynamic(() => import("../../../News/components/NewsCard"));

type Props = {
  newsData: NewsType[];
  similarData: NewsType[];
  newsSlug: NewsType;
  addRemoveLike: (data: any) => void;
  addComment: (data: any) => void;
  removeComment: (comment_id: string) => void;
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
  removeComment,
}: Props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });
  const isMobile = useMediaQuery({ minWidth: breakpoint.mobile });
  const dispatch = useDispatch();
  let { colorMode } = useScreenMode();

  const handleYoutubeURL = newsSlug?.video_link
  console.log(handleYoutubeURL);
  

  const reaction = useMemo(() => {
    return newsReaction?.find((news) => news.user_id === userID);
  }, [newsReaction, userID]);

  const handleCommentLike = () => {
    if (!userID) {
      toast.warning("Bəyənmək üçün qeydiyyat olun.");
      return;
    }

    addRemoveLike({
      news_id: newsSlug.slug,
      user_id: reaction ? null : userID,
      like_id: reaction?.id,
      collection: firebasePatch.connect_reactions,
    });
  };

  const onReaction = () => {
    dispatch(openReactionModal());
    dispatch(fillReactionUsers(newsReaction));
  };

  return (
    <Fragment>
      <Motion>
        <NewsContentStyled>
          <TitleContent
            newsSlug={newsSlug}
            onReaction={onReaction}
            reactionCount={newsReaction?.length ?? 0}
          />
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
          <Typography font="18" color={colorMode()} innerHTML>
            {newsSlug?.content.slice(0, 1800)}
          </Typography>
          {newsSlug?.video_link && (
            <VideoContent>
              {/* <ReactPlayer url={newsSlug?.video_link} playing loop controls /> */}
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
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
          <CommentContent
            slug={newsSlug?.slug}
            removeComment={removeComment}
            addRemoveLike={addRemoveLike}
            addComment={addComment}
          />
        </NewsContentStyled>
      </Motion>
      {newsData && (
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
