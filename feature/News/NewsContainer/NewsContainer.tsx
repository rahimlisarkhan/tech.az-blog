import { NewsContainerStyled, MoreNewsContent } from "./NewsContainer.styled";
import NewsCard from "../components/NewsCard";
import { useState } from "react";
import { useSelector } from "shared/hooks/useSelector";
import ButtonOutlined from "shared/components/ButtonOutlined";
import Grow from "@mui/material/Grow";
import { useRenderTypeName } from "shared/hooks/useRenderTypeName";
import { useMediaQuery } from "react-responsive";
import { breakpoint } from "styles/breakpoint";
import { MobileCard } from "../components/MobileCard";
import { parsePatch } from "shared/utils/parsePatch";
import { apiPageContents } from "api/news";
import { useRequest } from "shared/hooks/useRequest";
import { isDesktopViewCard } from "shared/utils/isDesktopViewCard";
import { isAppMode } from "shared/utils/isAppMode";

export const NewsContainer = ({ newsData, nextPage }: any) => {
  const appMode = useSelector((state) => state.home.appMode);
  const [data, setData] = useState(newsData);
  let [nextPageUrl, setNextPageUrl] = useState(nextPage);
  const tagName = useRenderTypeName();
  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });

  const { exc } = useRequest(() => apiPageContents(parsePatch(nextPageUrl)), {
    onSuccess: ({ results, next }) => {
      setData([...data, ...results]);
      setNextPageUrl(next);
    },
  });

  return (
    <NewsContainerStyled>
      {data?.map((item, index) => {
        if (index === 0) {
          return (
            <NewsCard
              key={`mixnews-id-${index}`}
              col={12}
              height={isDesktopOrLaptop ? "500" : "250"}
              {...item}
            />
          );
        }

        if (isDesktopViewCard(index)) {
          return isDesktopOrLaptop ? (
            <NewsCard
              key={`mixnews-id-${index}`}
              col={6}
              height="300"
              {...item}
            />
          ) : (
            <MobileCard
              key={`mobile-mixnews-id-${index}`}
              col={12}
              {...item}
              height="120"
            />
          );
        }
        return isDesktopOrLaptop ? (
          <NewsCard
            key={`mixnews-id-${index}`}
            col={4}
            {...item}
            height="320"
          />
        ) : (
          <MobileCard
            key={`mobile-mixnews-id-${index}`}
            col={12}
            {...item}
            height="120"
          />
        );
      })}

      <Grow in={true} style={{ transformOrigin: "0 0 10" }} timeout={2000}>
        <MoreNewsContent>
          <ButtonOutlined
            disabled={nextPageUrl ? false : true}
            mode={isAppMode(appMode)}
            onClick={() => exc()}
          >
            {nextPageUrl ? `daha 30 ${tagName}` : `daha ${tagName} yoxdur`}
          </ButtonOutlined>
        </MoreNewsContent>
      </Grow>
    </NewsContainerStyled>
  );
};
