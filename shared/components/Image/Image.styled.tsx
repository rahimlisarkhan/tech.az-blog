// import Image from "next/image";
import styled, { css } from "styled-components";

type Props = {
    cover?: string
    radius?: string
}

export const ImageStyled = styled.img.attrs(({ width, height }) => ({
    width: width || "100%",
    height: height || "100%",

}))`
    ${({ cover, radius }: Props) => css`
        object-fit:${cover ? "cover" : "normal"};
        border-radius: ${radius ? `${radius}px` : 0};
    `}
    /* margin:0 10px; */
    cursor:pointer;
    `