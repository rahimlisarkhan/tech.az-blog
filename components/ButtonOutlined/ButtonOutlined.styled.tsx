import { Button } from "@mui/material";
import styled from "styled-components";



export const ButtonOutlined: any = styled(Button).attrs(() => ({
    variant: "outlined",
    size: "small"
}))`
    text-transform: lowercase;
    font-size: 18px;
    padding:0 15px;
    border-color: ${({ theme, mode }: any) => mode ? theme.colors.dark : theme.colors.green} !important;
    color: ${({ theme, mode }: any) => mode ? theme.colors.dark : theme.colors.green} !important;

    &:disabled {
        background-color: ${({ theme, mode }: any) => mode ? theme.colors.grayText : theme.colors.grayText} !important;
    }

    &:hover{
        background-color: ${({ theme, mode }: any) => mode ? theme.colors.dark : theme.colors.green} !important;
        color: ${({ theme, mode }: any) => mode ? theme.colors.white : theme.colors.dark} !important;
    }
`