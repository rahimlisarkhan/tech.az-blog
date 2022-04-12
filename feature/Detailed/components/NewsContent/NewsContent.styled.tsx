import { Box } from "@material-ui/core";
import { Grid } from "@mui/material";
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
`;

export const VideoContent = styled(Box)`
  margin: 50px 0;
  div {
    width: 100% !important;
  }
`;
export const ImageContent = styled(Box)`
  margin: 30px 0;
  overflow: hidden;

  & img {
    transition: all 2s;
  }

  &:hover img {
    transform: scale(1.2);
  }
`;
