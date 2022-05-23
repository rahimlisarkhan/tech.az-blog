import { Grid } from "@mui/material";
import styled from "styled-components";

export const Content = styled(Grid).attrs(() => ({
  container: true,
}))`
  display: flex;
  justify-content: center;
  padding: 35px 0;
  min-height: 100vh;
`;

export const FormInfo: any = styled(Grid).attrs(() => ({
  item: true,
  lg: 6,
}))`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 35px 10px;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme, bg }: any) =>
    bg ? theme.colors.blackGrey : "transparent"};
`;

export const FormLogo = styled.div`
  width: 92px;
  height: 92px;
  position: absolute;
  top: 7px;
  left: 35px;
`;

export const CenterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterBoxForm = styled.div`
  width: 85%;
  height: 100%;
`;



