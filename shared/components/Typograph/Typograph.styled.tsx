import { Typography } from "@mui/material";
import styled, { css } from "styled-components";
import { ThemeProps, TypographProps } from "../../../types/theme";

export const TypographyText = styled(Typography).attrs(() => ({
  variant: "h1",
  component: "div",
}))`
  padding: 0 !important;
  ${({
    theme,
    font,
    color,
    bold,
    decaration,
    cursor,
    center,
    space,
    margin,
    text,
  }: TypographProps<ThemeProps>) => css`
    color: ${() => {
      switch (color) {
        case "dark":
          return theme.colors.textDark;
        case "gray":
          return theme.colors.whiteGray;
        case "darkgray":
          return theme.colors.blackGrey1;
        case "red":
          return theme.colors.bgRed;
        case "white":
          return theme.colors.white;
        case "green":
          return theme.colors.green;
        case "lime":
          return theme.colors.green;
        default:
          return theme.colors[color];
      }
    }} !important;
    font-size: ${font ? `${font}px` : theme.font.size.medium} !important;
    margin: ${margin ? margin : "10px 3px"} !important;
    font-weight: ${bold && `bold`} !important;
    line-height: 1.5 !important;
    text-transform: ${text ? "lowercase" : "normal"}!important;
    display: flex;
    align-items: center;
    text-align: ${center ? `center` : "left"} !important;
    justify-content: ${center ? `center` : "none"} !important;
    letter-spacing: ${space ? `${space}px` : "none"} !important;
    text-decoration: ${decaration ? `${decaration}` : "none"} !important;
    cursor: ${cursor && `pointer` } !important;

    

    svg {
      margin-right: 5px;
    }
  `}
`;
