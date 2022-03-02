import React, { useEffect } from "react"
import { DetailedContainerStyled } from "./DetailedContainer.styled"
import NewsContent from "../components/NewsContent";
import { useDispatch } from "../../../shared/hooks/useDispatch";
import { fillAppMode } from "../../../shared/store/slices/home/homeSlices";

export const DetailedContainer: React.FC<any> = ({ newsSlug , newsData }) => {

  let dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fillAppMode())
  },[])

  return (
    <DetailedContainerStyled>
      <NewsContent newsSlug={newsSlug} newsData={newsData} />
    </DetailedContainerStyled>
  )
}