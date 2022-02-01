import { Box, Grid } from "@mui/material";
import styled from "styled-components";


type Props = {
    col?: number | string
    height?: number | string
}

export const NewsCardStyled = styled(Grid).attrs(({ col }: Props) => ({
    item: true,
    xs: 12,
    md: col
}))`

`

export const Card = styled(Box)`
border-radius:5px;
height:${({ height }: Props) => height ? `${height}px` : "300px"} !important;
margin-bottom:16px;
box-shadow:  0 0 5px .5px ${({ theme }) => theme.colors.blackGrey};
overflow: hidden;
transition: all .3s;
position: relative;

/* &:nth-child(1){
    margin-right: 0 !important;
} */

&:nth-child(odd){
    margin-right: 16px;
}

cursor: pointer;

    & img{
        transition: all 2s;
    }

    &:hover img{
        transform:scale(1.2)
    }
`

export const  CardTitleContent = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000003b;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding:${({col}:Props)=>col===12 ? "60px" : "40px"}

`

export const  CardTitle = styled(Box)`
    height:${({col}:Props)=>col===12 ? "132px" : "95px"};
    border-left: 3px solid ${({theme})=>theme.colors.green};
    padding-left:15px;
    display: flex;
    flex-direction: column;
    `