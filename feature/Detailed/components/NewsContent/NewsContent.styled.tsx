import { Grid } from "@mui/material";
import mediaQueries from "styles/media-queries";

import styled, { css } from "styled-components";

export const NewsContentStyled = styled(Grid).attrs(() => ({
  item: true,
  lg: 8,
  xs: 12,
}))``;

export const SuggestedContentStyled: any = styled(Grid).attrs(() => ({
  item: true,
  xs: 12,
  lg: 4,
}))`
  ${({ desktop }: any) => css`
    padding-top: ${desktop ? "140px" : "0"};
    padding-left: ${desktop ? "40px" : "0"};
  `}
`;

export const SimilarNewsContentStyled = styled(Grid).attrs(() => ({
  item: true,
  xs: 12,
}))`
  margin: 50px 0 !important;
  padding: 0 10px;
`;

export const VideoContent = styled.div`
  margin: 50px 0;
  div {
    width: 100% !important;
    ${mediaQueries.greaterThan("xl")`
      height: 450px !important;
    `};
  }
`;
export const ImageContent = styled.div`
  margin: 30px 0;
  overflow: hidden;
  width: 100%;
  position: relative;
  & img {
    transition: all 2s;
  }
  &:hover img {
    transform: scale(1.2);
  }
`;