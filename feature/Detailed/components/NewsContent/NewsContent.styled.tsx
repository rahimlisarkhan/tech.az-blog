import { Box } from "@material-ui/core";
import { Grid } from "@mui/material";
import styled from "styled-components";



export const NewsContentStyled = styled(Grid).attrs(()=>({
    item:true,
    xs:8
}))`
` 

export const SuggestedContentStyled = styled(Grid).attrs(()=>({
    item:true,
    xs:4
}))`
padding-top:120px;
padding-left:40px;
` 

export const VideoContent = styled(Box)`
    margin:50px 0 ;
    div{
        width: 100% !important;
    }
`



