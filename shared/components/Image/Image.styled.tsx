import styled, { css } from "styled-components";
type Props = {
  cover?: string | number;
  radius?: string | number;
  width?: string | number;
  height?: string | number;
};

export const ImageContent: any = styled.div`
  ${({ radius, width, height }: Props) => css`
    width: ${!width ? "100%" : `${width}px`};
    height: ${!height ? "100%" : `${height}px`};
    border-radius: ${radius ? `${radius}px` : 0};
  `}
  position: relative;
  cursor: pointer;
`;
