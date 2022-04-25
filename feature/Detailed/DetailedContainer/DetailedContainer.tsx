import React from "react"
import { DetailedContainerStyled } from "./DetailedContainer.styled"
import NewsContent from "../components/NewsContent";

export const DetailedContainer: React.FC<any> = ({ newsSlug , newsData }) => {

  return (
    <DetailedContainerStyled>
      <NewsContent newsSlug={newsSlug} newsData={newsData} />
    </DetailedContainerStyled>
  )
}