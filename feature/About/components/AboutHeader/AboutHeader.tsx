import TypographyText from "../../../../components/Typograph"
import { AboutHeaderContent, AboutRow, AboutHeaderInfo,AboutHeaderButton } from "./AboutHeader.styled"
import Image from "../../../../components/Image"
import { useSelector } from "../../../../hooks/useSelector"


export const AboutHeader = () => {
    let appMode = useSelector(state => state.home.appMode)


    return (
        <AboutHeaderContent>
            <AboutRow>
                <AboutHeaderInfo>
                    <TypographyText font="65" color={appMode ? "black" : "green"} bold="true" text="true">
                        everything is connected with 
                    </TypographyText>
                    <TypographyText font="65" color={appMode ? "black" : "white"} bold="true"  text="true">
                        tech.az 
                    </TypographyText>
                    <AboutHeaderButton mode={appMode ? " true" : ""}>
                        learn more
                    </AboutHeaderButton>
                </AboutHeaderInfo>
                <AboutHeaderInfo>
                    <Image src="/image/carousel.png" alt="carousel" />
                </AboutHeaderInfo>
            </AboutRow>
        </AboutHeaderContent>
    )
}