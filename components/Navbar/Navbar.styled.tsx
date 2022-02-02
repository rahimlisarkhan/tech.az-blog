import { Box, MenuItem } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ThemeProps } from "../../interfaces/theme";



type MenuItemProps = {
    activeItem?: string,
    mode?: string
    theme?: ThemeProps
}


export const MenuList = styled(Box)`
    display: flex;
    width: 70%;
    margin-top:10px
`
export const MenuItemStyle:any = styled(MenuItem)`
    font-size:16px !important;
    text-transform:lowercase;
    color:${({ theme, activeItem, mode }: MenuItemProps) => {
        if (mode) {
            return theme.colors.dark
        }

        if (activeItem) {
            return theme.colors.green
        }
        return theme.colors.white
    }} !important;
    font-weight:${({ activeItem }: MenuItemProps) => activeItem ? "bold" : "500"} !important;
    letter-spacing: 2px !important;
    transition: all .2s !important;
    
    &:hover{
        border-bottom:2px solid ${({ theme }: MenuItemProps) => theme.colors.green};
        transform:scale(0.95)
    }
`