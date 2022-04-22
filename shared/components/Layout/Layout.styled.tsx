import { Box } from "@mui/material";
import styled, { css } from "styled-components";
import { ThemeProps } from "../../../types/theme";

type Props = {
  theme?: ThemeProps;
  mode?: boolean;
};

export const LayoutContent: any = styled(Box)`
  ${({ theme, mode }: Props) => css`
    transition: all 1s;
    background-color: ${mode ? theme.colors.white : "transparent"} !important;
  `}
  z-index: 100;
`;
