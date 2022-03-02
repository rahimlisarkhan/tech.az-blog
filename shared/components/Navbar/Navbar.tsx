import { useRouter } from "next/router"
import { MenuList, MenuItemStyle } from "./Navbar.styled"
import { router } from "../../constant/route"
import { useTranslation } from "next-i18next"


type Props = {
    mode?: string | Boolean
}

export const Navbar: React.FC<Props> = ({ mode }) => {
    let { push, asPath } = useRouter()
    let { t } = useTranslation("menu");

    const isActive = (href?: string): string => {
        if (href === asPath) {
            return "true"
        }
        return ""
    }

    // 
    return (
        <MenuList>
            {Object.values(router.menu).map((item) => {
                return <MenuItemStyle mode={mode} key={`menu-id-${item.id}`} active={isActive(item.href)}
                    onClick={() => push(item.href)}>
                    {t(item.title)}
                </MenuItemStyle>
            })}
        </MenuList>
    )
}