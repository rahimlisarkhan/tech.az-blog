import { HeaderStyled, HeaderContainer, ModeButton } from "./Header.styled"
import React, { useState } from 'react'
import Image from "../Image"
import Navbar from "../Navbar"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { setAppMode } from "../../store/slices/home/homeSlices";
import { useDispatch } from "../../hooks/useDispatch";
import { useSelector } from "../../hooks/useSelector";
import { useRouter } from "next/router";
import { router } from "../../utils/route";

type Props = {
}

const Header: React.FC<Props> = () => {

    let mode = useSelector(state => state.home.appMode)
    let dispatch = useDispatch()
    let { push } = useRouter()

    const handleMode = () => {
        dispatch(setAppMode())
    }

    return (
        <HeaderStyled mode={mode ? mode : ""}>
            <HeaderContainer mode={mode ? mode : ""} >
                <Image onClick={() => push(router.menu.home.href)} src={`/image/${mode ? "logo-black" : "logo"}.png`} width="165" cover="true" height="32" />
                <Navbar mode={mode ? mode : ""} />
                <ModeButton mode={mode ? mode : ""} onClick={handleMode}>
                    {mode ? <NightsStayIcon /> : <Brightness4Icon />}
                </ModeButton>
            </HeaderContainer>
        </HeaderStyled>
    )
}

export default Header