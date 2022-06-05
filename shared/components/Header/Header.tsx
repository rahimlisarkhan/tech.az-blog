import {
  HeaderStyled,
  HeaderContainer,
  ModeButton,
  MenuActions,
} from "./Header.styled";
import React, { useEffect, useState } from "react";
import { Image } from "../Image";
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
import { ROUTER } from "shared/constant/route";
import { useMediaQuery } from "react-responsive";
import { breakpoint } from "styles/breakpoint";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarMobile from "../NavbarMobile";
import Drawer from "../Drawer";
import ButtonOutlined from "../ButtonOutlined";
import { useScreenMode } from "../../hooks/useScreenMode";
import SearchIcon from "@mui/icons-material/Search";
import Login from "@mui/icons-material/Login";
import { Avatar } from "../Avatar";
import { useSelector } from "shared/hooks/useSelector";
import { stateUser } from "shared/store/slices/user/userSlices";
import { useAccount } from "shared/hooks/useAccount";
import { isAppMode } from "shared/utils/isAppMode";

type Props = {};

const Header: React.FC<Props> = () => {
  let { googleLogout } = useAccount();

  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });
  const isMobile = useMediaQuery({ maxWidth: breakpoint.laptop });

  const user = useSelector(stateUser);

  let [open, setOpen] = useState(false);
  let { mode } = useScreenMode();

  let dispatch = useDispatch();
  let { push } = useRouter();

  useEffect(() => {
    dispatch(fillAppMode());
  }, []);

  const redirectLogin = () => {
    push(ROUTER.LOGIN.href);
  };

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
    <HeaderStyled mode={isAppMode(mode)}>
      <HeaderContainer mode={isAppMode(mode)}>
        <Image
          onClick={() => push(ROUTER.MENU.HOME.href)}
          src={`/image/${mode ? "logo-black" : "logo"}.png`}
          width="80"
          cover
          isNotLoading
        />
        {isDesktopOrLaptop && <Navbar mode={isAppMode(mode)} />}

        <MenuActions>
          {isDesktopOrLaptop && !user && (
            <ButtonOutlined
              mode={isAppMode(mode)}
              onClick={() => push(ROUTER.JOIN.href)}
            >
              bizə qoşul
            </ButtonOutlined>
          )}
          <ModeButton mode={isAppMode(mode)} onClick={handleSearchBar}>
            <SearchIcon />
          </ModeButton>
          <ModeButton mode={isAppMode(mode)} onClick={handleMode}>
            {mode ? <NightsStayIcon /> : <Brightness4Icon />}
          </ModeButton>
          {!user && (
            <ModeButton mode={isAppMode(mode)} onClick={redirectLogin}>
              <Login />
            </ModeButton>
          )}
          {isMobile && (
            <ModeButton mode={isAppMode(mode)} onClick={handleClick}>
              <MenuIcon />
            </ModeButton>
          )}
          {user && (
            <ModeButton>
              <Avatar name={user?.first_name} size="lg" image={user?.image} />
            </ModeButton>
          )}
          <button onClick={() => googleLogout()}>Logout</button>
        </MenuActions>
        <Drawer isOpen={open} setIsOpen={handleClick}>
          <NavbarMobile closeMenu={handleClick} />
        </Drawer>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
