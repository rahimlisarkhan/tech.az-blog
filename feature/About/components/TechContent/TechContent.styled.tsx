import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import styled from "styled-components";




export const TechContentStyled = styled(Grid).attrs(() => ({
    item: true
}))`
    margin:100px 0 !important;
`


export const TechContentRow = styled(Grid).attrs(() => ({
    container: true
}))``

export const TechContentInfo:any = styled(Grid).attrs(() => ({
    item: true,
    xs:12,
}))`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
`


export const TechCard:any = styled(Box)`
    width: 320px;
    height: 300px;
    margin:15px;

    img{
        background: ${({mode}:any)=>mode ? "gray" : "transparent"};
        padding:5px;
}
`