import { Box } from "@material-ui/core";
import { Button, Container } from "@mui/material";
import styled from "styled-components";

export const HeaderStyled: any = styled.header`
    position:sticky ;
    top: 0;
    z-index: 99;
    transition: all 1s;
    background: ${({ theme, mode }: any) =>
      mode ? theme.colors.white : theme.colors.blackGrey}};
    margin-bottom: 20px;
`




export const HeaderContainer: any = styled(Container).attrs(() => ({
  maxWidth: "lg",
}))`
  display: flex !important;
  height: 80px;
  justify-content: space-between !important;
  border-bottom:${({ theme, mode }: any) => (mode ?`1px solid ${theme.colors.whiteGray}` : "none")} !important;
  align-items: center !important;
`;

export const ModeButton: any = styled(Button).attrs((props: any) => ({
  variant: "text",
}))`
    min-width: 0 !important;
    svg{
      margin-left: 5px;
        fill: ${({ theme, mode }: any) =>
          mode ? theme.colors.dark : theme.colors.green}};
    }
`

export const MenuActions = styled(Box)`
  /* width: 20%; */
`;
