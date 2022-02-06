import { Box } from "@material-ui/core";
import { Grid } from "@mui/material";
import styled from "styled-components";



export const NewsContentStyled = styled(Grid).attrs(() => ({
    item: true,
    xs: 8
}))`
`

export const SuggestedContentStyled = styled(Grid).attrs(() => ({
    item: true,
    xs: 4
}))`
padding-top:120px;
padding-left:40px;
`

export const SimilarNewsContentStyled = styled(Grid).attrs(() => ({
    item: true,
    xs: 12
}))`
margin: 50px 0;
`

export const VideoContent = styled(Box)`
    margin:50px 0 ;
    div{
        width: 100% !important;
    }
`
export const ImageContent = styled(Box)`
    margin: 30px 0;
    overflow: hidden;

& img{
    transition: all 2s;
}

&:hover img{
    transform:scale(1.2)
}`



