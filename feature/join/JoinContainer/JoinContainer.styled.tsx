import { Box } from "@material-ui/core";
import { Grid, TextField } from "@mui/material";
import styled from "styled-components";




export const JoinContent = styled(Grid).attrs(()=>({
    item:true,
    xs:12
}))`
display: flex;
justify-content: center;
padding-top: 50px;
`


export const FormContent:any = styled(Box)`
height: 500px;
padding: 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid ${({theme,mode}:any)=> mode ? theme.colors.dark : theme.colors.green};

label {
    color:${({theme,mode}:any)=>mode ? theme.colors.dark :theme.colors.green} !important;
}
` 

export const Field = styled(TextField).attrs(()=>({
    fullWidth:true, 
    color:"success",
    variant:"filled"
}))`
margin:10px 0 !important;
`

