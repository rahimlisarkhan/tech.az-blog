import styled, { css } from "styled-components";
import { IconType } from "./IconButton";

export const IconContent: any = styled.div`
  ${({ theme, color, size, font, text, cursor, margin }: IconType) => css`
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: ${font + "px"};
    margin: ${margin ?? "0"};
    cursor: ${cursor ? "pointer" : "normal"};
    color: ${theme.colors[text]} !important;
    transition: all .2s;

    &:active {
      transform: scale(0.95);
    }

    svg {
      fill: ${theme.colors[color]};
      width: ${size + "px"};
      height: ${size + "px"};
      margin: 0 5px;
    }
  `}
`;
