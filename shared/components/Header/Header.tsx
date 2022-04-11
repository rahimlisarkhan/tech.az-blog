import {
  HeaderStyled,
  HeaderContainer,
  ModeButton,
  MenuActions,
} from "./Header.styled";
import React, { useState } from "react";
import Image from "../Image";
import Navbar from "../Navbar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import {
  setAppMode,
  setIsOpenSearch,
} from "shared/store/slices/home/homeSlices";
import { useDispatch } from "shared/hooks/useDispatch";
import { useRouter } from "next/router";
import { router } from "shared/constant/route";
import { useMediaQuery } from "react-responsive";
import { breakpoint } from "styles/breakpoint";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarMobile from "../NavbarMobile";
import Drawer from "../Drawer";
import ButtonOutlined from "../ButtonOutlined";
import { useScreenMode } from "../../hooks/useScreenMode";
import { useLangChange } from "shared/hooks/useLangChange";
import { Search } from "@mui/icons-material";


type Props = {};

const Header: React.FC<Props> = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });
  const isMobile = useMediaQuery({ maxWidth: breakpoint.laptop });
  const { langChange } = useLangChange();
  let [open, setOpen] = useState(false);
  let { mode } = useScreenMode();

  let dispatch = useDispatch();
  let { push } = useRouter();

  const handleMode = () => {
    dispatch(setAppMode());
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSearchBar = () => {
    dispatch(setIsOpenSearch());
  };

  return (
    <HeaderStyled mode={mode ? mode : ""}>
      <HeaderContainer mode={mode ? mode : ""}>
        <Image
          onClick={() => push(router.menu.home.href)}
          src={`/image/${mode ? "logo-black" : "logo"}.png`}
          width="165"
          cover="true"
          height="32"
        />
        {isDesktopOrLaptop && <Navbar mode={mode ? mode : ""} />}
        {/* <Navbar mode={mode ? mode : ""} /> */}
        <MenuActions>
          {isDesktopOrLaptop && (
            <ButtonOutlined
              mode={mode ? "true" : ""}
              onClick={() => push("/join")}
            >
              bizə qoşul
            </ButtonOutlined>
          )}
          <ModeButton mode={mode ? mode : ""} onClick={handleSearchBar}>
            <Search />
          </ModeButton>
          <ModeButton mode={mode ? mode : ""} onClick={handleMode}>
            {mode ? <NightsStayIcon /> : <Brightness4Icon />}
          </ModeButton>
          {isMobile && (
            <ModeButton mode={mode ? mode : ""} onClick={handleClick}>
              <MenuIcon />
            </ModeButton>
          )}
        </MenuActions>
        <Drawer isOpen={open} setIsOpen={handleClick}>
          <NavbarMobile closeMenu={handleClick} />
        </Drawer>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
