import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import mediaQueries from "styles/media-queries";
import { ThemeProps } from "../../../../types/theme";

type Props = {
  col?: number | string;
  height?: number | string;
};

export const NewsCardStyled = styled(Grid).attrs(({ col = 12 }: Props) => ({
  item: true,
  xs: 12,
  // sm:6,
  lg: col,
}))`
  flex-direction: column;
  height: auto;
  padding-right: ${({ mobilemargin }) =>
    mobilemargin ? "16px !important" : "0 !important"};
  cursor: pointer !important;

  ${mediaQueries.greaterThan("sm")`
    padding-right: 16px !important;
  `}
`;

export const Card = styled(Box)`
  display: flex;
  border-radius: 5px;
  height: ${({ height }: Props) =>
    height ? `${height}px` : "300px"} !important;
  margin-bottom: 16px;
  box-shadow: 0 0 2px 0.3px ${({ theme }) => theme.colors.blackGrey};
  overflow: hidden;
  transition: all 0.3s;
  background-color: ${({ theme, mode }: any) =>
    mode ? theme.colors.white : theme.colors.blackGrey};

  cursor: pointer;

  & img {
    transition: all 2s;
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

export const CardTitleContent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const CardTitle = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
