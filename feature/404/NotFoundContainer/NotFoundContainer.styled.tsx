import { Grid, Button } from "@mui/material";
import styled from "styled-components";




export const ErrorContent = styled(Grid).attrs(() => ({
    item: true,
    md: 12
}))`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const ErrorButton = styled(Button).attrs(() => ({
    variant: "contained"
}))`
background-color: ${({ theme }) => theme.colors.green} !important;
font-size: 20px !important;
color: ${({ theme }) => theme.colors.dark} !important ;
text-transform: lowercase !important;
transition: all .3s !important;

&:hover{
    transform: scale(.95)
}
`