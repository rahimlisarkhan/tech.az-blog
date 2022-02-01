import { Box, MenuItem } from "@mui/material";
import React from "react";
import styled from "styled-components";



type MenuItemProps = {
    activeItem?: string,
    theme?: {
        colors?: {
            white?: string
            green?: string
        }
    }
}


export const MenuList = styled(Box)`
    display: flex;
    width: 70%;
    margin-top:10px
`


export const MenuItemStyle = styled(MenuItem)`
    font-size:16px;
    text-transform:lowercase;
    color:${({ theme, activeItem }: MenuItemProps) => activeItem ? theme.colors.green : theme.colors.white} !important;
    font-weight:${({ activeItem }: MenuItemProps) => activeItem ? "bold" : "500"};
    letter-spacing: 2px;
    transition: all .2s;
    
    &:hover{
        border-bottom:2px solid ${({ theme }:MenuItemProps) => theme.colors.green};
        transform:scale(0.95)
    }
`