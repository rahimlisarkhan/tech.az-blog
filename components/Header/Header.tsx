import { HeaderStyled, HeaderContainer, ModeButton, MenuActions } from "./Header.styled"
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
import { useMediaQuery } from 'react-responsive'
import { breakpoint } from "../../styles/breakpoint";
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/material";
import NavbarMobile from "../NavbarMobile"
import Drawer from "../Drawer"
import ButtonOutlined from "../ButtonOutlined";

type Props = {
}

const Header: React.FC<Props> = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop })
    const isMobile = useMediaQuery({ maxWidth: breakpoint.mobile })
    let [open, setOpen] = useState(false);

    let mode = useSelector(state => state.home.appMode)
    let dispatch = useDispatch()
    let { push } = useRouter()

    const handleMode = () => {
        dispatch(setAppMode())
    }

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <HeaderStyled mode={mode ? mode : ""}>
            <HeaderContainer mode={mode ? mode : ""} >
                <Image onClick={() => push(router.menu.home.href)} src={`/image/${mode ? "logo-black" : "logo"}.png`} width="165" cover="true" height="32" />
                {isDesktopOrLaptop && <Navbar mode={mode ? mode : ""} />}
                {/* <Navbar mode={mode ? mode : ""} /> */}
                <MenuActions>
                    {!isMobile && <ButtonOutlined mode={mode ? "true" : ""} onClick={() => push("/join")}>
                        bizə qoşul
                    </ButtonOutlined>}
                    <ModeButton mode={mode ? mode : ""} onClick={handleMode}>
                        {mode ? <NightsStayIcon /> : <Brightness4Icon />}
                    </ModeButton>
                    {isMobile && <ModeButton mode={mode ? mode : ""} onClick={handleClick}>
                        <MenuIcon />
                    </ModeButton>}
                </MenuActions>
                <Drawer isOpen={open} setIsOpen={handleClick}>
                    <NavbarMobile closeMenu={handleClick} />
                </Drawer>

            </HeaderContainer>
        </HeaderStyled>
    )
}

export default Header