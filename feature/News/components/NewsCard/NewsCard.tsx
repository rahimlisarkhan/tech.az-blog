import { NewsCardStyled, Card, CardTitleContent, CardTitle } from "./NewsCard.styled"
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph"
import { Router, useRouter } from "next/router"
import { router } from "../../../../utils/route"
import { convertNormalDate } from "../../../../helper/timeConvert"
import { useMediaQuery } from "react-responsive"
import { breakpoint } from "../../../../styles/breakpoint"

type Props = {
    height?: number | string
    col?: number,
    cover_image?: string,
    title?: string,
    slug?: string,
    type?: string,
    created_at?: string
    sm?: number
}

export const NewsCard: React.FC<Props> = ({sm, height, col, cover_image, title, slug, type, created_at }) => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop })

    let { push, asPath, pathname } = useRouter()

    const changePage = (): void => {
        push(`detailed?${type}=${slug}`)
    }

    const dynamicFont = () => {

        if(!isDesktopOrLaptop){
            return "22"
        }

        if (col === 12) {
            return "36"
        }

        if (!col && asPath !== router.menu.home.href) {
            return "15"
        }
        return "20"
    }

    const renderTypeName = () => {
        switch (type) {
            case "videos":
                return "Video"
            case "news":
                return "Xəbər"
            default:
                return "Məqalə"
        }
    }

    return (
        <NewsCardStyled sm={sm} col={col} onClick={changePage}>
            <Card height={height}>
                <Image src={cover_image} alt={title} cover="true" />
                <CardTitleContent col={col}>
                    <CardTitle >
                        <TypographyText color="white" font={"13"} bold="true">
                            {renderTypeName()} • {convertNormalDate(created_at)}
                        </TypographyText>
                        <TypographyText color="white" margin="0" font={dynamicFont()} bold="true">
                            {`${title?.slice(0, pathname === router.detailed.href ? 40 : 60)}...`}
                        </TypographyText>
                    </CardTitle>
                </CardTitleContent>
            </Card>
        </NewsCardStyled>
    )
}