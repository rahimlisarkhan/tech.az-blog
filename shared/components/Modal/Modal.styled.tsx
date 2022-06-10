import { IconButton } from "@mui/material";
import styled from "styled-components";

export const IconButtonStyled = styled(IconButton)`
  svg {
    fill: white;
    font-size: 30px;
  }
  position: absolute !important;
  top: 15px;
  right: 1%;
`;

export const Content = styled.div`
  width: 552px;
  height: 570px;
  position: absolute;
  border-radius: 8px;
  padding: 10px 20px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  /* background-color: ${({ theme }) => theme.colors["blackGrey"]}; */
  background-color: ${({ theme }) => theme.colors["blackGrey"]};
`;
