import Typography from "ui/Typograph";
import {
  AboutHeaderContent,
  AboutRow,
  AboutHeaderInfo,
  AboutHeaderButton,
} from "./AboutHeader.styled";
import { Image } from "ui/Image";
import { useSelector } from "shared/hooks/useSelector";
import { breakpoint } from "styles/breakpoint";
import { useMediaQuery } from "react-responsive";
import { isAppMode } from "shared/utils/isAppMode";

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
          {/* <Typography
            font={renderFont()}
            color={appMode ? "black" : "green"}
            bold
            text="true"
          >
          </Typography> */}
          <Typography
            font={renderFont()}
            color={appMode ? "black" : "white"}
            bold
            text="true"
          >
            {/* tech.az */}
            hər şey tech.az ilə bağlıdır
          </Typography>
          <AboutHeaderButton mode={isAppMode(appMode)}>
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
