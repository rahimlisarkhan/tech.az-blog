import { HeaderStyled } from "./Header.styled"
import React from 'react'
import Image from "../Image"
import Navbar from "../Navbar"

type Props = {
}

const Header: React.FC<Props> = () => {
    return (
        <HeaderStyled>
            <Image src="/image/logo.png" width="150" cover="true"  height="32"/>
            <Navbar/>
        </HeaderStyled>
    )
}

export default Header