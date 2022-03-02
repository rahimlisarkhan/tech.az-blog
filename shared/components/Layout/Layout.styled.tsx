import { Box } from "@mui/material";
import styled, { css } from "styled-components";
import { ThemeProps } from "../../interfaces/theme";

type Props = {
  theme?: ThemeProps,
  mode?: boolean
}

export const LayoutContent:any = styled(Box)`
  ${({ theme, mode }: Props) => css`
    /* background-image:linear-gradient(${theme.colors.dark} 85%,${theme.colors.dark} 20% ); */
    background-color:${mode ? theme.colors.white : "transparent"} !important;
`}
  z-index: 100;
`
