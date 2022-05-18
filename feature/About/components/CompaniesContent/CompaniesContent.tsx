import { CompaniesContentStyled, CompaniesRow, CompaniesInfo, CompaniesCard, CompaniesTexts } from "./CompaniesContent.styled"
import {Image} from "../../../../shared/components/Image"
import TypographyText from "../../../../shared/components/Typograph"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import { useSelector } from "../../../../shared/hooks/useSelector"
import { breakpoint } from "../../../../styles/breakpoint"
import { useMediaQuery } from "react-responsive"

export const CompaniesContent = ({ data: { title, data }, reverse }: any) => {
    const isMobile = useMediaQuery({ maxWidth: breakpoint.mobile })
    let appMode = useSelector(state => state.home.appMode)

    let { push } = useRouter();

    return (
        <CompaniesContentStyled>
            <CompaniesRow reverse={reverse} desktop={!isMobile ? "true" : ""}>
                <CompaniesInfo bgChangeColor={appMode ? "true" : ""} >
                    {data.map(({ id, title, href, img }: any) => (
                        <CompaniesCard desktop={!isMobile ? "true" : ""} key={`company-id-${id}`} onClick={() => push(href)}>
                            <Image width="170" height="70" alt={title} src={img} />
                        </CompaniesCard>
                    ))}
                </CompaniesInfo>
                <CompaniesTexts >
                    <Box>
                        <TypographyText color={appMode ? "black" : "white"} font="40" bold="true" text="true">
                            {title}
                        </TypographyText>
                    </Box>
                </CompaniesTexts>
            </CompaniesRow>
        </CompaniesContentStyled>
    )
}