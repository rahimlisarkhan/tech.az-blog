import styled, { css } from "styled-components";
import { ThemeProps } from "types/theme";

type ButtonStyle = {
  radius: string | undefined;
  bg: string | undefined;
  color: string | undefined;
  padding: string | undefined;
  margin: string | undefined;
  bold: string | undefined;
  font: string | undefined;
  cursor: string | undefined;
  theme?: ThemeProps;
};

export const ButtonStyled: any = styled.button`
  ${({
    theme,
    bg,
    padding,
    margin,
    color,
    bold,
    font,
    cursor,
    radius,
  }: Partial<ButtonStyle>) => css`
    background-color: ${bg ? theme.colors[bg] : "transparent"};
    color: ${color ? theme.colors[color] : "black"};
    padding: ${padding ?? 0};
    margin: ${margin ?? 0};
    border-radius: ${radius ?? 0};
    border: none;
    outline: none;
    display: flex;
    font-weight: ${bold ? bold : "normal"};
    align-items: center;
    font-size: ${`${font}px`};
    transition: all 0.2s;
    cursor:  ${cursor ? "pointer":"normal"};

    &:hover {
      transform: scale(0.97);
    }

    span {
      margin-left: 5px;
    }
  `}
`;
