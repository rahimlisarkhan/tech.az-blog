import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import { ThemeProps } from "../../../../interfaces/theme";


type Props = {
    col?: number | string
    height?: number | string
}

export const NewsCardStyled = styled(Grid).attrs(({ col = 12 }: Props) => ({
    item: true,
    xs: 12,
    md: col
}))`
    padding-right: 16px !important;
    cursor: pointer !important;
`

export const Card = styled(Box)`
border-radius:5px;
height:${({ height }: Props) => height ? `${height}px` : "300px"} !important;
margin-bottom:16px;
box-shadow:  0 0 5px .3px ${({ theme }) => theme.colors.blackGrey};
overflow: hidden;
transition: all .3s;
position: relative;



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
    background-color: #00000053;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding:${({col}:Props)=>col===12 ? "60px" : "40px"}

`

export const  CardTitle = styled(Box)`
    border-left: 3px solid ${({theme})=>theme.colors.green};
    padding-left:15px;
    display: flex;
    flex-direction: column;
    `