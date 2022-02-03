import React from "react"
import { DetailedContainerStyled} from "./DetailedContainer.styled"
import NewsContent from "../components/NewsContent";

export const DetailedContainer: React.FC = () => {
    return (
        <DetailedContainerStyled>
          {/* <TitleContent/> */}
          <NewsContent/>
        </DetailedContainerStyled>
    )
}