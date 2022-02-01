import styled from "styled-components";


export const HeaderStyled = styled.header`
    display: flex;
    height: 80px;
    background: ${({theme})=>theme.colors.blackGrey};
    margin-bottom: 20px;
    border-radius: 0 0 5px 5px;
    padding: 24px 40px;
    justify-content: space-between;
    align-items: center;
`