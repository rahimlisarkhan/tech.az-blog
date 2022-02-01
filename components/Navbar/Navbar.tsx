import { useRouter } from "next/router"
import { MenuList, MenuItemStyle } from "./Navbar.styled"
import { router } from "../../utils/route"


// type MenuListProp = {
//     id:string,
//     title:string,
//     href:string,
// }

export const Navbar: React.FC = () => {
    let { push,asPath } = useRouter()


    const isActive = (href?: string): string => {
        if(href === asPath){
            return "true"
        }
        return ""
    }

    // activeItem={isActive(item.href)}
    return (
        <MenuList>
            {Object.values(router.menu).map((item) => {
                return <MenuItemStyle key={`menu-id-${item.id}`} 
                    onClick={() => push(item.href)}>
                    {item.title}
                </MenuItemStyle>
            })}
        </MenuList>
    )
}