import { FooterStyled, FooterContainer } from "./Footer.styled"
import React from 'react'
import Image from "../Image"
import TypographyText from "../Typograph"

type Props = {
}

const Footer: React.FC<Props> = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Image src="/image/logo.png" width="100" height="25"/>
                <TypographyText color="white" font="14" text="lower">
                   © copyright 2022 | tech.az
                </TypographyText>
            </FooterContainer>
        </FooterStyled>
    )
}

export default Footer