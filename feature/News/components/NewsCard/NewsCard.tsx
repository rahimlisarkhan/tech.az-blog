import { NewsCardStyled, Card, CardTitleContent, CardTitle } from "./NewsCard.styled"
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph"

type Props = {
    height?: number | string
    col: number
}

export const NewsCard: React.FC<Props> = ({ height, col }) => {
    return (
        <NewsCardStyled col={col}>
            <Card height={height}>
                <Image src="https://www.cnet.com/a/img/GEHehsFv3PetMBjxFvqxZojEU1w=/940x528/2021/10/01/0dc5aad3-9dfe-4be1-b37d-2f643d85cd66/20210925-iphone-13-pro-03.jpg" alt="Phone" cover="true" />
                <CardTitleContent col={col}>
                        <CardTitle col={col}>
                        <TypographyText color="white" font={"13"} bold="true">
                                    News • 12 минут назад
                            </TypographyText>
                            <TypographyText color="white" font={col === 12 ? "36" : "20"} bold="true">
                                    Блогер создал «мобильный» Power Bank условной ёмкостью 27 млн мА·ч
                            </TypographyText>
                        </CardTitle>
                </CardTitleContent>
            </Card>
        </NewsCardStyled>
    )
}