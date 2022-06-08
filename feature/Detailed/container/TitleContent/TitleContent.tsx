import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EventNoteIcon from "@mui/icons-material/EventNote";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Typography from "shared/components/Typograph";
import { Tag, TagContent, TitleContentStyled } from "./TitleContent.styled";
import { convertNormalDate } from "shared/helper/timeConvert";
import { useScreenMode } from "shared/hooks/useScreenMode";
import { useMemo } from "react";

export const TitleContent = ({ newsSlug, reactionCount }: any) => {
  let { colorMode } = useScreenMode();

  const content = useMemo(
    () => [
      {
        icon: <PersonIcon />,
        title: newsSlug?.owner,
      },
      {
        icon: <LocalOfferIcon />,
        title: newsSlug?.tag?.map((item, index) => (
          <Tag key={index}> {item.title}</Tag>
        )),
      },
      {
        icon: <EventNoteIcon />,
        title: convertNormalDate(newsSlug?.created_at),
      },
      {
        icon: <VisibilityIcon />,
        title: `${newsSlug?.views} baxış`,
      },
      {
        icon: <FavoriteIcon />,
        title: `${reactionCount} bəyənən`,
      },
    ],
    [newsSlug]
  );

  return (
    <TitleContentStyled>
      <Typography font="24" color={colorMode()} bold="true" as="h1">
        {newsSlug?.title}
      </Typography>
      <TagContent>
        {content.map(({ icon, title }, index) => {
          if (index === 4 && !reactionCount) {
            return;
          }

          return (
            <Typography font="14" color={colorMode()}>
              {icon}
              {title}
            </Typography>
          );
        })}
      </TagContent>
    </TitleContentStyled>
  );
};
