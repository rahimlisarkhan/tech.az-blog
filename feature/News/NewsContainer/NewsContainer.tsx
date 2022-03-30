import { NewsContainerStyled, MoreNewsContent } from "./NewsContainer.styled";
import NewsCard from "../components/NewsCard";
import { getDataNews } from "../../../shared/services/MixNews";
import { useEffect, useState } from "react";
// import Loading from "../../../shared/components/Loading"
import { useSelector } from "../../../shared/hooks/useSelector";
import { fillAppMode } from "../../../shared/store/slices/home/homeSlices";
import { useDispatch } from "../../../shared/hooks/useDispatch";
import ButtonOutlined from "../../../shared/components/ButtonOutlined";
import { useRouter } from "next/router";
import Grow from "@mui/material/Grow";
export const NewsContainer = ({ newsData, nextPage }: any) => {
  let appMode = useSelector((state) => state.home.appMode);
  let { pathname } = useRouter();
  let dispatch = useDispatch();
  let [data, setData] = useState(newsData);
  let [nextPageUrl, setNextPageUrl] = useState(nextPage);

  useEffect(() => {
    dispatch(fillAppMode());
  }, []);

  const renderTypeName = () => {
    switch (pathname) {
      case "/article":
        return "məqalə";
      case "/video":
        return "video";
      default:
        return "xəbər";
    }
  };

  const onPage = async () => {
    if (!nextPageUrl) {
      return;
    }

    let res = await getDataNews(null, nextPageUrl?.split("api")[1]);

    if (res) {
      setData([...data, ...res.data.results]);
      setNextPageUrl(res.data.next);
    }
  };

  return (
    <NewsContainerStyled>
      {data?.map((item, index) => {
        if (index === 0) {
          return (
            <NewsCard
              key={`mixnews-id-${index}`}
              col={12}
              height="460"
              {...item}
            />
          );
        }

        if (
          index === 3 ||
          index === 4 ||
          index === 5 ||
          index === 8 ||
          index === 9 ||
          index === 10 ||
          index === 13 ||
          index === 14 ||
          index === 15
        ) {
          return (
            <NewsCard
              key={`mixnews-id-${index}`}
              col={4}
              height="468"
              {...item}
            />
          );
        }
        return <NewsCard key={`mixnews-id-${index}`} col={6} {...item} />;
      })}

      <Grow in={true} style={{ transformOrigin: "0 0 10" }} timeout={2000}>
        <MoreNewsContent>
          <ButtonOutlined
            disabled={nextPageUrl ? false : true}
            mode={appMode ? "true" : ""}
            onClick={onPage}
          >
            {nextPageUrl
              ? `daha 12 ${renderTypeName()}`
              : `daha ${renderTypeName()} yoxdur`}
          </ButtonOutlined>
        </MoreNewsContent>
      </Grow>
    </NewsContainerStyled>
  );
};
