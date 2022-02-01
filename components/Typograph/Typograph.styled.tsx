import { Typography } from "@mui/material";
import styled, { css } from "styled-components";

type Props = {
    color?:string
    font?:string,
    bold?:string,
    center?:string,
    margin?:string,
    theme?:{
        colors:{
            textBlack:string
            grayText1:string
            textGreenLight:string
            mainRed:string
            grayText2:string
            white:string
            green:string
        }
        font:{
            size :{
                medium:string
            }
        }
    }
}

export const TypographyText = styled(Typography).attrs(() => ({
    variant: "h6",
    component: "div"
}))`
    padding: 0 !important;
    ${({ theme, font, color, bold, center, margin }:Props) => css`
        color:${() => {
            switch (color) {
                case "dark":
                    return theme.colors.textBlack;
                case "gray":
                    return theme.colors.grayText1;
                case "darkgray":
                    return theme.colors.grayText2;
                case "red":
                    return theme.colors.mainRed;
                case "white":
                    return theme.colors.white;
                case "green":
                    return theme.colors.textGreenLight;
                case "lime":
                    return theme.colors.green;
                default:
                    return theme.colors.textBlack;
            }
        }
        } !important;
        font-size:${font ? `${font}px` : theme.font.size.medium} !important;
        margin:${margin ? `${margin}px 2px` : "10px 3px"} !important;
        font-weight:${bold && `bold`} !important;
        line-height: 1.3 !important;
        text-transform: capitalize !important;
        display: flex;
        align-items: center;
        text-align:${center ? `center` : "none"} !important;
        justify-content:${center ? `center` : "none"} !important;
        svg{
            margin-right: 5px;
        }
        `}
`