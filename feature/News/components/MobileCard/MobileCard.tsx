import {
  NewsCardStyled,
  Card,
  CardTitleContent,
  CardTitle,
} from "./MobileCard.styled";
import { Image } from "shared/components/Image";
import TypographyText from "shared/components/Typograph";
import { useRouter } from "next/router";
import { router } from "shared/constant/route";
import { convertNormalDate } from "shared/helper/timeConvert";
import { useMediaQuery } from "react-responsive";
import { breakpoint } from "styles/breakpoint";
import { Motion } from "shared/components/Motion";
import { convertUrlLink } from "shared/utils/convertUrlLink";
import { useMemo } from "react";
import { useSelector } from "shared/hooks/useSelector";

type Props = {
  height?: number | string;
  col?: number;
  cover_image?: string;
  title?: string;
  content?: string;
  slug?: string;
  mobilemargin?: string;
  type?: string;
  created_at?: string;
  sm?: number;
};

export const MobileCard: React.FC<Props> = ({
  sm,
  height,
  col,
  cover_image,
  content,
  title,
  slug,
  mobilemargin,
  type,
  created_at,
}) => {
  let { push } = useRouter();
  const appMode = useSelector((state) => state.home.appMode);

  const changePage = (): void => {
    push(`/detailed/${type}=${slug}`);
  };

  const renderTypeName = useMemo(() => {
    switch (type) {
      case "videos":
        return "Video";
      case "news":
        return "Xəbər";
      default:
        return "Məqalə";
    }
  }, []);

  return (
    <Motion>
      <NewsCardStyled col={col} onClick={changePage}>
        <Card height={height} mode={appMode ? "true" : ""}>
          <Image
            width="200"
            src={convertUrlLink(cover_image)}
            alt={title}
            cover
          />
          <CardTitleContent>
            <CardTitle>
              <TypographyText color={!appMode ? "white" : "darkGray"} font="10" bold="true">
                {renderTypeName} • {convertNormalDate(created_at)}
              </TypographyText>
            </CardTitle>

            <TypographyText color={!appMode ? "white" : "darkGray"} margin="0" font="13" bold="true">
              {title}
            </TypographyText>
          </CardTitleContent>
        </Card>
      </NewsCardStyled>
    </Motion>
  );
};
