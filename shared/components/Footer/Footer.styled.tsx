import styled from "styled-components";
import { Container } from '@mui/material';


export const FooterStyled = styled.header`
    background: ${({ theme }) => theme.colors.blackGrey};
    margin-top: ${({ theme})=>theme.boxModel.margin.large};
    padding:0 36px 0 16px !important;

`

export const FooterContainer = styled(Container).attrs(() => ({
    maxWidth: "false"
}))`
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    height: 60px;

    img{
        filter:  brightness(0) invert(1)
    }
`