import { Typograph } from "shared/components/Typograph/Typograph";
import { InfoContent, SearchCardContent } from "./SearchCard.styled";
import Image from "shared/components/Image";
import { NewsType } from "types/news";
import { useRouter } from "next/router";
import { useDispatch } from "shared/hooks/useDispatch";
import { setIsOpenSearch } from "shared/store/slices/home/homeSlices";
import { Grow } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { breakpoint } from "styles/breakpoint";
import { shortText } from "shared/utils/shortText";
import { HighlighterContent } from "shared/components/Highlighter";

type Props = {
  searchWord: string;
  news: NewsType;
};

export const SearchCard = ({
  searchWord,
  news: { cover_image, title, slug, type },
}: Props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });

  const dispatch = useDispatch();
  const { push } = useRouter();

  const renderFont = () => {
    if (isDesktopOrLaptop) {
      return "20";
    }
    return "16";
  };

  const handleRouter = () => {
    push(`/detailed/${type}=${slug}`);
    dispatch(setIsOpenSearch());
  };

  return (
    <Grow in={true} style={{ transformOrigin: "0 0 10" }} timeout={1000}>
      <SearchCardContent onClick={handleRouter}>
        <Image
          width={isDesktopOrLaptop ? "250" : "100"}
          cover="true"
          src={cover_image}
          alt={title}
        />
        <InfoContent>
          <Typograph font={renderFont()} color="black" bold="true">
            <HighlighterContent
              text={isDesktopOrLaptop ? title : shortText(title, 35)}
              searchWord={searchWord}
            />
          </Typograph>
        </InfoContent>
      </SearchCardContent>
    </Grow>
  );
};
