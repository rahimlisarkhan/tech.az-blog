import TypographyText from "../../../../shared/components/Typograph";
import {
  AboutHeaderContent,
  AboutRow,
  AboutHeaderInfo,
  AboutHeaderButton,
} from "./AboutHeader.styled";
import { Image } from "../../../../shared/components/Image";
import { useSelector } from "../../../../shared/hooks/useSelector";
import { breakpoint } from "../../../../styles/breakpoint";
import { useMediaQuery } from "react-responsive";

export const AboutHeader = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });
  let appMode = useSelector((state) => state.home.appMode);

  const renderFont = () => {
    if (isDesktopOrLaptop) {
      return "65";
    }
    return "45";
  };

  return (
    <AboutHeaderContent>
      <AboutRow>
        <AboutHeaderInfo>
          {/* <TypographyText
            font={renderFont()}
            color={appMode ? "black" : "green"}
            bold="true"
            text="true"
          >
          </TypographyText> */}
          <TypographyText
            font={renderFont()}
            color={appMode ? "black" : "white"}
            bold="true"
            text="true"
          >
            {/* tech.az */}
            hər şey tech.az ilə bağlıdır
          </TypographyText>
          <AboutHeaderButton mode={appMode ? " true" : ""}>
            {/* learn more */}
            daha ətraflı
          </AboutHeaderButton>
        </AboutHeaderInfo>
        {isDesktopOrLaptop && (
          <AboutHeaderInfo>
            <Image src="/image/carousel.png" alt="carousel" cover />
          </AboutHeaderInfo>
        )}
      </AboutRow>
    </AboutHeaderContent>
  );
};
