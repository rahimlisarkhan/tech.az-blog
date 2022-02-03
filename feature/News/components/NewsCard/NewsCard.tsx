import { NewsCardStyled, Card, CardTitleContent, CardTitle } from "./NewsCard.styled"
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph"
import { useRouter } from "next/router"

type Props = {
    height?: number | string
    col?: number,
    cover_image?: string,
    title?: string,
    slug?: string,
    type?: string
}

export const NewsCard: React.FC<Props> = ({ height, col, cover_image, title, slug, type }) => {

    let { push } = useRouter()

    const changePage = (): void => {
        push(`detailed?slug=${slug}`)
    }

    return (
        <NewsCardStyled col={col} onClick={changePage}>
            <Card height={height}>
                <Image src={cover_image} alt="Phone" cover="true" />
                <CardTitleContent col={col}>
                    <CardTitle >
                        <TypographyText color="white" font={"13"} bold="true">
                            {type} • 12 минут назад
                        </TypographyText>
                        <TypographyText color="white" font={col === 12 ? "36" : "20"} bold="true">
                            {title}
                        </TypographyText>
                    </CardTitle>
                </CardTitleContent>
            </Card>
        </NewsCardStyled>
    )
}