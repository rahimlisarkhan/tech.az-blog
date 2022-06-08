import React, { useEffect, useState } from "react";
import { DetailedContainerStyled } from "./DetailedContainer.styled";

import dynamic from "next/dynamic";
import { useRequest } from "shared/hooks/useRequest";

const NewsContent = dynamic(() => import("../components/NewsContent"));

export const DetailedContainer: React.FC<any> = ({ newsSlug }) => {
  const [newsData, setNewsData] = useState(null);

  const { exc, isStatus } = useRequest("mixdata", {
    onSuccess: (res) => {
      setNewsData(res?.results);
    },
  });

  useEffect(() => {
    exc();
  }, []);

  return (
    <DetailedContainerStyled>
      <NewsContent
        isStatusData={isStatus}
        newsSlug={newsSlug}
        newsData={newsData}
      />
    </DetailedContainerStyled>
  );
};
