import { Box, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import { ThemeProps } from "../../interfaces/theme";


type MenuItemProps = {
    active?: string,
    mode?: string
    theme?: ThemeProps
}


export const NavbarMobileContent: any = styled(Box)` 
background-color:${({ mode, theme }: any) => mode ? theme.colors.white : theme.colors.dark};
min-width:76vw;
padding:50px;
min-height:100vh;
`



export const MenuList = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top:10px;
`
export const MenuItemStyle: any = styled(MenuItem)`
    font-size:25px !important;
    text-transform:lowercase;
    margin:10px 0 !important;
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