import { Button } from "@mui/material";
import styled from "styled-components";
import mediaQueries from "styles/media-queries";

export const SearchContentStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100vh;
  width: 90%;

  ${mediaQueries.greaterThan("xl")`
  width: 38%;
`}
`;

export const SearchInputBox: any = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  border-radius: 5px;
  top: ${({ inputPosition }: any) => (inputPosition ? "8.3%" : "30%")};
  overflow: hidden;
  transition: all 1s;
  z-index: 5;
  display: flex;


  ${mediaQueries.greaterThan("lg")`
  font-size: 60px;
`}
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px;
  outline: none;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};

  ${mediaQueries.greaterThan("xl")`
  font-size: 24px;
`}
`;

export const SearchButton = styled(Button).attrs(() => ({
  color: "success",
}))`
  width: 40px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.green} !important;
  color: ${({ theme }) => theme.colors.white} !important;
  border-radius: 0 !important;
`;

export const SearchList: any = styled.div`
  display: ${({ inputPosition }: any) => (inputPosition ? "block" : "none")};
  position: absolute;
  top: 18%;
  width: 100%;
  max-height: 700px;
  padding-right: 2px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* color of the tracking area */
  }
`;
