import { Button, Grid } from "@mui/material";
import styled, { keyframes,css } from "styled-components";


const rotate = keyframes`
  from {
    transform: scale(.95);
  }

  to {
    transform: rotate(1.2);
  }
`;



export const AboutHeaderContent = styled(Grid).attrs(() => ({
    item: true
}))`
margin-bottom: 100px;

`

export const AboutRow = styled(Grid).attrs(() => ({
    container: true
}))`
padding:100px 0;
`


export const AboutHeaderInfo = styled(Grid).attrs(() => ({
    item: true,
    xs: 12,
    md: 6
}))`
 animation: ${rotate} 5s linear infinite alternate;
`

export const AboutHeaderButton:any = styled(Button).attrs(() => ({
    variant: "contained"
}))`

    ${({theme,mode}:any)=>css`
        background-color: ${mode ? theme.colors.dark : theme.colors.green};
        color: ${mode ? theme.colors.white : theme.colors.dark};
        font-size:25px;
        text-transform: lowercase;

        &:hover{
            background-color: ${mode ? theme.colors.green : theme.colors.bgGreen};
        }
    `}
`