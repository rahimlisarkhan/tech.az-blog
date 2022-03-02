import { Box, MenuItem } from "@mui/material";
import styled from "styled-components";
import { ThemeProps } from "../../interfaces/theme";



type MenuItemProps = {
    active?: string,
    mode?: string
    theme?: ThemeProps
}


export const MenuList = styled.ul`
    display: flex;
    flex-direction: row !important;
    justify-content: center;
    margin-top:10px;
`
export const MenuItemStyle:any = styled(MenuItem)`
    font-size:16px !important;
    text-transform:lowercase;
    margin:0 15px !important;
    color:${({ theme, active, mode }: MenuItemProps) => {
        if (mode) {
            return theme.colors.dark
        }

        if (active) {
            return theme.colors.green
        }
        return theme.colors.white
    }} !important;
    font-weight:${({ active }: MenuItemProps) => active ? "bold" : "500"} !important;
    letter-spacing: 2px !important;
    transition: all .2s !important;
    
    &:hover{
        border-bottom:2px solid ${({ theme }: MenuItemProps) => theme.colors.green};
        transform:scale(0.95)
    }
`