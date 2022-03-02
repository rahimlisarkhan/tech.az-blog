import { Content } from "./Loading.styled"
import Image from "../Image"



export const Loading:React.FC = () => {

    return (
            <Content>
                <Image width="100" height="100" radius="100" src="/image/loading/loading.gif" alt="loading"/>
            </Content>
        )
}