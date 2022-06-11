import styled, { css } from "styled-components";
import { ThemeProps } from "types/theme";

type ButtonStyle = {
  radius: string | undefined;
  bg: string | undefined;
  color: string | undefined;
  padding: string | undefined;
  height: string | undefined;
  width: string | undefined;
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
    height,
    width,
    cursor,
    radius,
  }: Partial<ButtonStyle>) => css`
    background-color: ${bg ? theme.colors[bg] : "transparent"};
    color: ${color ? theme.colors[color] : "black"};
    padding: ${padding ?? 0};
    width: ${width ?? "100%"};
    height: ${height ?? "100%"};
    padding: ${padding ?? 0};
    margin: ${margin ?? 0};
    border-radius: ${radius ?? 0};
    border: none;
    outline: none;
    display: flex;
    font-weight: ${bold ? bold : "normal"};
    justify-content: center;
    align-items: center;
    font-size: ${`${font}px`};
    transition: all 0.2s;
    cursor: ${cursor ? "pointer" : "normal"};

    &:hover {
      transform: scale(0.98);
    }

    span {
      margin-left: 5px;
    }
  `}
`;
