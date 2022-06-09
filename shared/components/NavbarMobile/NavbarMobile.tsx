import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useSelector } from "../../hooks/useSelector";
import { ROUTER } from "../../constant/route";
import ButtonOutlined from "../ButtonOutlined";
import { NavbarMobileContent } from "./NavbarMobile.styled";
import { MenuList, MenuItemStyle } from "./NavbarMobile.styled";
import { isAppMode } from "shared/utils/isAppMode";

type Props = {
  closeMenu: () => void;
};

export const NavbarMobile = ({ closeMenu }: Props) => {
  let mode = useSelector((state) => state.home.appMode);
  let { push, asPath } = useRouter();
  let { t } = useTranslation("menu");

  const isActive = (href?: string): string => {
    if (href === asPath) {
      return "true";
    }
    return "";
  };

  const menuAcions = (href: string) => {
    push(href);
    closeMenu();
  };

  return (
    <NavbarMobileContent mode={isAppMode(mode)}>
      <MenuList>
        {Object.values(ROUTER.MENU).map((item) => {
          return (
            <MenuItemStyle
              mode={mode}
              key={`mobile-menu-id-${item.id}`}
              active={isActive(item.href)}
              onClick={() => menuAcions(item.href)}
            >
              {t(item.title)}
            </MenuItemStyle>
          );
        })}
        <ButtonOutlined mode={mode ? "true" : ""} onClick={() => push("/join")}>
          bizə qoşul
        </ButtonOutlined>
      </MenuList>
    </NavbarMobileContent>
  );
};
