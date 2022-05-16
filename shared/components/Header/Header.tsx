import {
  HeaderStyled,
  HeaderContainer,
  ModeButton,
  MenuActions,
} from "./Header.styled";
import React, { useEffect, useState } from "react";
import Image from "../Image";
import Navbar from "../Navbar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import {
  fillAppMode,
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
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const Header: React.FC<Props> = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });
  const isMobile = useMediaQuery({ maxWidth: breakpoint.laptop });
  let [open, setOpen] = useState(false);
  let { mode } = useScreenMode();

  let dispatch = useDispatch();
  let { push } = useRouter();

  useEffect(() => {
    dispatch(fillAppMode());
  }, []);

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
    <HeaderStyled mode={mode ? "true" : ""}>
      <HeaderContainer mode={mode ? "true" : ""}>
        <Image
          onClick={() => push(router.menu.home.href)}
          src={`/image/${mode ? "logo-black" : "logo"}.png`}
          width="90"
          height="90"
          cover="true"
        />
        {isDesktopOrLaptop && <Navbar mode={mode ? "true" : ""} />}
        <MenuActions>
          {isDesktopOrLaptop && (
            <ButtonOutlined
              mode={mode ? "true" : ""}
              onClick={() => push("/join")}
            >
              bizə qoşul
            </ButtonOutlined>
          )}
          <ModeButton mode={mode ? "true" : ""} onClick={handleSearchBar}>
            <SearchIcon />
          </ModeButton>
          <ModeButton mode={mode ? "true" : ""} onClick={handleMode}>
            {mode ? <NightsStayIcon /> : <Brightness4Icon />}
          </ModeButton>
          {isMobile && (
            <ModeButton mode={mode ? "true" : ""} onClick={handleClick}>
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
