import { useRouter } from "next/router"
import { MenuList, MenuItemStyle } from "./Navbar.styled"
import { router } from "../../utils/route"

export const Navbar: React.FC = () => {
    let { push,asPath } = useRouter()


    const isActive = (href: string): string => {
        if(href === asPath){
            return "true"
        }
        return ""
    }

    
    return (
        <MenuList>
            {Object.values(router.menu).map(item => {
                return <MenuItemStyle key={`menu-id-${item.id}`} activeItem={isActive(item.href)}
                    onClick={() => push(item.href)}>
                    {item.title}
                </MenuItemStyle>
            })}
        </MenuList>
    )
}