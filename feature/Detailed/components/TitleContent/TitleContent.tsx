import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EventNoteIcon from "@mui/icons-material/EventNote";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TypographyText from "../../../../shared/components/Typograph";
import { Tag, TagContent, TitleContentStyled } from "./TitleContent.styled";
import { convertNormalDate } from "../../../../shared/helper/timeConvert";
import { useScreenMode } from "../../../../shared/hooks/useScreenMode";

export const TitleContent = ({ newsSlug }: any) => {
  let { colorMode } = useScreenMode();

  return (
    <TitleContentStyled>
      <TypographyText font="24" color={colorMode()} bold="true">
        {newsSlug?.title}
      </TypographyText>
      <TagContent>
        <TypographyText font="14" color={colorMode()}>
          <PersonIcon />
          {newsSlug?.owner}
        </TypographyText>
        <TypographyText font="14" color={colorMode()}>
          <LocalOfferIcon />
          {newsSlug?.tag?.map((item, index) => (
            <Tag key={index}> {item.title}</Tag>
          ))}
        </TypographyText>
        <TypographyText font="14" color={colorMode()}>
          <EventNoteIcon />
          {convertNormalDate(newsSlug?.created_at)}
        </TypographyText>
        <TypographyText font="14" color={colorMode()}>
          <VisibilityIcon />
          {newsSlug?.views} baxış
        </TypographyText>
      </TagContent>
    </TitleContentStyled>
  );
};
