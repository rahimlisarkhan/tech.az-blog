import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonOutlined: any = styled(Button).attrs(() => ({
  variant: "outlined",
  color: "success",
  size: "small",
}))`
  border: 2px solid
    ${({ theme, mode }: any) => (mode ? theme.colors.dark : theme.colors.green)} !important;
  color: ${({ theme, mode }: any) =>
    mode ? theme.colors.dark : theme.colors.green} !important;
  text-transform: lowercase;
  font-size: 18px;
  margin: 0 10px !important;
  padding: 0 15px;

  &:hover {
    background-color: ${({ theme, mode }: any) =>
      mode ? theme.colors.dark : theme.colors.green} !important;
    color: ${({ theme, mode }: any) =>
      mode ? theme.colors.white : theme.colors.dark} !important;
  }
`;
