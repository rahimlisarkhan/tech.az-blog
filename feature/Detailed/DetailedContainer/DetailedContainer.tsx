import React, { useEffect } from "react"
import { DetailedContainerStyled } from "./DetailedContainer.styled"
import NewsContent from "../components/NewsContent";
import { useDispatch } from "../../../hooks/useDispatch";
import { fillAppMode } from "../../../store/slices/home/homeSlices";

export const DetailedContainer: React.FC = ({ newsSlug , newsData }: any) => {

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