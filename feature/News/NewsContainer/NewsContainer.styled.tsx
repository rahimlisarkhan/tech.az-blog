import { Grid } from "@mui/material";

const { default: styled } = require("styled-components");



export const NewsContainerStyled = styled(Grid).attrs(() => ({
    container: true
}))`
`

export const MoreNewsContent = styled(Grid).attrs(() => ({
    item: true,
    xs: 12
}))`
display: flex;
justify-content: center;
margin: ${({ theme }) => theme.boxModel.margin.large} 0;
`