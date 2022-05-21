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

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 53px;
  font-size: 20px;
  border: 3px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blackGrey};
  color: ${({ theme }) => theme.colors.white} !important;
  padding: 10px;
  border-radius: 5px;
  padding-left: 40px;
  margin: 20px 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white} !important;
    opacity: 0.7;
  }

  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.green};
    outline: ${({ theme }) => theme.colors.green};
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 35px;
  left: 10px;
  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 53px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.blackGrey};
  font-size: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2s;
  margin: 30px 0 15px 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgGreen};
  }
`;
