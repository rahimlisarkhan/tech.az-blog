import TypographyText from "shared/components/Typograph";
import {
  TechContentStyled,
  TechContentRow,
  TechContentInfo,
  TechCard,
} from "./TechContent.styled";
import { Image } from "shared/components/Image";
import { useScreenMode } from "shared/hooks/useScreenMode";
import { isAppMode } from "shared/utils/isAppMode";

export const TechContent = () => {
  let { mode: appMode, colorMode } = useScreenMode();

  return (
    <TechContentStyled>
      <TechContentRow>
        <TechContentInfo lg="3">
          <TypographyText font="65" color={colorMode()} bold text="true">
            tech.az media
          </TypographyText>
        </TechContentInfo>
        <TechContentInfo lg="9">
          <TechCard mode={isAppMode(appMode)}>
            <Image
              width="100"
              height="110"
              src="/image/icons_graphics/Asset6.png"
              alt="techaz"
            />
            <TypographyText font="25" color={colorMode()} text="true">
              trend texnologiyası və startap xəbərləri
            </TypographyText>
          </TechCard>
          <TechCard mode={isAppMode(appMode)}>
            <Image
              width="100"
              height="110"
              src="/image/icons_graphics/Asset9.png"
              alt="techaz"
            />
            <TypographyText font="25" color={colorMode()} text="true">
              ən son gadget rəyləri
            </TypographyText>
          </TechCard>
          <TechCard mode={isAppMode(appMode)}>
            <Image
              width="100"
              height="110"
              src="/image/icons_graphics/Asset7.png"
              alt="techaz"
            />
            <TypographyText font="25" color={colorMode()} text="true">
              beynəlxalq texnologiya hadisələrindən canlı yayımlar
            </TypographyText>
          </TechCard>
          <TechCard mode={isAppMode(appMode)}>
            <Image
              width="100"
              height="110"
              src="/image/icons_graphics/Asset8.png"
              alt="techaz"
            />
            <TypographyText font="25" color={colorMode()} text="true">
              yeniliklərə dair xüsusi məqalələr
            </TypographyText>
          </TechCard>
        </TechContentInfo>
      </TechContentRow>
    </TechContentStyled>
  );
};
