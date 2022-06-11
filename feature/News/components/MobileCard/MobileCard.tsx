import {
  NewsCardStyled,
  Card,
  CardTitleContent,
  CardTitle,
} from "./MobileCard.styled";
import { Image } from "ui/Image";
import Typography from "ui/Typograph";
import { useRouter } from "next/router";
import { convertNormalDate } from "shared/helper/timeConvert";
import { Motion } from "ui/Motion";
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
  height,
  col,
  cover_image,
  title,
  slug,
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
              <Typography color={!appMode ? "white" : "darkGray"} font="10" bold>
                {renderTypeName} • {convertNormalDate(created_at)}
              </Typography>
            </CardTitle>

            <Typography color={!appMode ? "white" : "darkGray"} margin="0" font="13" bold>
              {title}
            </Typography>
          </CardTitleContent>
        </Card>
      </NewsCardStyled>
    </Motion>
  );
};
