import { Button } from "@mui/material";
import styled from "styled-components";



export const ButtonOutlined: any = styled(Button).attrs(() => ({
    variant: "outlined",
    size: "small"
}))`
    text-transform: lowercase;
    font-size: 18px;
    padding:0 15px;
    border:2px solid ${({ theme, mode }: any) => mode ? theme.colors.dark : theme.colors.green} !important;
    color: ${({ theme, mode }: any) => mode ? theme.colors.dark : theme.colors.green} !important;

    &:hover{
        background-color: ${({ theme, mode }: any) => mode ? theme.colors.dark : theme.colors.green} !important;
        color: ${({ theme, mode }: any) => mode ? theme.colors.white : theme.colors.dark} !important;
    }
`