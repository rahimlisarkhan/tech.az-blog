import { Card } from "@material-ui/core";
import { Grid } from "@mui/material";
import styled from "styled-components";




export const CompaniesContentStyled = styled(Grid).attrs(() => ({
    item: true
}))`
margin:50px 0 !important;
`

export const CompaniesRow: any = styled(Grid).attrs(() => ({
    container: true
}))`
display: flex;
flex-direction: ${({ reverse, desktop }: any) => {
        if (reverse && desktop) {
            return "row-reverse"
        }

        if (!reverse && desktop) {
            return "row"
        }

        if (!desktop) {
            return "column-reverse"
        }
    }} !important;
justify-content: space-between !important;
text-align: ${({ desktop }: any) => !desktop ? "center" : "normal"};
`

export const CompaniesInfo: any = styled(Grid).attrs(() => ({
    item: true,
    xs: 12,
    lg: 8
}))`
display: flex;
flex-wrap: wrap;
/* justify-content: space-between; */
background: ${({ theme, bgChangeColor }: any) => bgChangeColor ? theme.colors.dark : theme.colors.green};
padding:50px 25px;
`

export const CompaniesTexts: any = styled(CompaniesInfo).attrs(() => ({
    lg: 3
}))`
background:transparent;
justify-content: center;
flex-direction:column;
`


export const CompaniesCard: any = styled(Card)`
width:${({ desktop }: any) => desktop ? "200px" : "100%"} !important;
height: 200px;
padding:15px;
margin:15px;
display: flex;
align-items: center;
justify-content: center;
transition: all .3s !important;

&:hover{
    transform:scale(.95)
}
`