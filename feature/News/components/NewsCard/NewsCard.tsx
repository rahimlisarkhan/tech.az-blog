import { NewsCardStyled, Card, CardTitleContent, CardTitle } from "./NewsCard.styled"
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph"
import { useRouter } from "next/router"
import { router } from "../../../../utils/route"

type Props = {
    height?: number | string
    col?: number,
    cover_image?: string,
    title?: string,
    slug?: string,
    type?: string
}

export const NewsCard: React.FC<Props> = ({ height, col, cover_image, title, slug, type }) => {

    let { push, asPath } = useRouter()

    const changePage = (): void => {
        push(`detailed?slug=${slug}`)
    }

    const dynamicFont = () => {
        if (col === 12) {
            return "36"
        }

        if (!col && asPath !== router.menu.home.href) {
            return "15"
        }
        return "20"
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
                        <TypographyText color="white" margin="0" font={dynamicFont()} bold="true">
                            {`${title?.slice(0, asPath !== router.menu.home.href ? 40 : 60)}...`}
                        </TypographyText>
                    </CardTitle>
                </CardTitleContent>
            </Card>
        </NewsCardStyled>
    )
}