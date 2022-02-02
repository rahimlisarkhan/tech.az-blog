import { Button, Container } from "@mui/material";
import styled from "styled-components";




export const HeaderStyled:any = styled.header`
    background: ${({ theme, mode}: any) => mode ? theme.colors.white : theme.colors.blackGrey}} !important;
    margin-bottom: 20px;
`

export const HeaderContainer:any = styled(Container).attrs(() => ({
    maxWidth: "lg"
}))`
    display: flex !important;
    height: 80px;
    justify-content: space-between !important;
    border-bottom:1px solid ${({ theme, mode}: any) => mode ? theme.colors.whiteGray :""} !important;
    align-items: center !important;

`

export const ModeButton:any = styled(Button).attrs((props:any) => ({
    variant: "text"
}))`

    svg{
        fill: ${({ theme, mode }: any) => mode ? theme.colors.dark : theme.colors.green}} !important;
    }

`