import React from "react";
import { DetailedContainerStyled } from "./DetailedContainer.styled";

import dynamic from "next/dynamic";

const NewsContent = dynamic(() => import("../components/NewsContent"));

export const DetailedContainer: React.FC<any> = ({ newsSlug, newsData }) => {
  return (
    <DetailedContainerStyled>
      <NewsContent newsSlug={newsSlug} newsData={newsData} />
    </DetailedContainerStyled>
  );
};
