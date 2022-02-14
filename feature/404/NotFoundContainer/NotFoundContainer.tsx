import { useRouter } from "next/router"
import TypographyText from "../../../components/Typograph"
import { ErrorContent, ErrorButton } from "./NotFoundContainer.styled"





export const NotFoundContainer = () => {

    let { back } = useRouter()

    return (
        <ErrorContent>
            <TypographyText font="150" bold="true" color="green">
                404
            </TypographyText>
            <TypographyText font="40" color="white" text="true">
                Səhifə tapılmadı!
            </TypographyText>
            <ErrorButton onClick={() => back()}>
                Geriyə qayıt
            </ErrorButton>
        </ErrorContent>
    )
}