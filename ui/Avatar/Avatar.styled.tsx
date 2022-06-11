import Avatar from "@mui/material/Avatar";
import styled, { css } from "styled-components";

export const AvatarStyled = styled(Avatar)`
  ${({ font, width, height }: any) => css`
    width: ${width + "px"} !important;
    height: ${height + "px"} !important;
    font-size: ${font + "px"} !important;
  `}
`;
