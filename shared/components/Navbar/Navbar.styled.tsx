import { Box, MenuItem } from "@mui/material";
import styled from "styled-components";
import { ThemeProps } from "../../../types/theme";

type MenuItemProps = {
  active?: string;
  mode?: string;
  theme?: ThemeProps;
};

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  margin-top: 10px;
`;
export const MenuItemStyle: any = styled(MenuItem)`
  box-sizing: border-box !important;
  font-size: 16px !important;
  height: 40px;
  position: relative;
  text-align: center;
  text-transform: lowercase;
  margin: 0 15px !important;
  color: ${({ theme, active, mode }: MenuItemProps) => {
    if (mode) {
      return theme.colors.dark;
    }

    if (active) {
      return theme.colors.green;
    }
    return theme.colors.white;
  }} !important;
  font-weight: ${({ active }: MenuItemProps) =>
    active ? "bold" : "500"} !important;
  letter-spacing: 2px !important;
  transition: all 0.2s !important;

  &:after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: ${({ theme }: MenuItemProps) => theme.colors.green};
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover:after {
    opacity: 1;
  }
`;
