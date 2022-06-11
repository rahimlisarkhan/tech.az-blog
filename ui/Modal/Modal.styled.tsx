import styled, { css } from "styled-components";

export const IconContent = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Content: any = styled.div`
  ${({ mode, width, height, theme }: any) => css`
    width: ${width + "px"};
    height: ${height + "px"};
    background-color: ${mode
      ? theme.colors["white"]
      : theme.colors["blackGrey"]};
  `}

  position: absolute;
  border-radius: 8px;
  padding: 10px 20px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
