import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import mediaQueries from "styles/media-queries";

export const SearchCardContent = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100px;
  transition: all 0.3s;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 2px 0.5px black;

  ${mediaQueries.greaterThan("xl")`
  height: 150px;
`};

  &:hover {
    transform: scale(0.98);
  }
`;

export const SearchImageContent: FunctionComponent = styled.div`
  position: relative;
  width: ${({ width }: { width: string }) => `${width}px`};
  height: 100%;
`;

export const InfoContent = styled.div`
  width: 70%;
  margin: 10px;
  padding: 10px;
  border-left: 3px solid ${({ theme }) => theme.colors.green};

  ${mediaQueries.greaterThan("xl")`
  margin: 30px;
`}
`;
