import Typography from "ui/Typograph";
import {
  TechContentStyled,
  TechContentRow,
  TechContentInfo,
  TechCard,
} from "./TechContent.styled";
import { Image } from "ui/Image";
import { useScreenMode } from "shared/hooks/useScreenMode";
import { isAppMode } from "shared/utils/isAppMode";

export const TechContent = () => {
  let { mode: appMode, colorMode } = useScreenMode();

  return (
    <TechContentStyled>
      <TechContentRow>
        <TechContentInfo lg="3">
          <Typography font="65" color={colorMode()} bold text="true">
            tech.az media
          </Typography>
        </TechContentInfo>
        <TechContentInfo lg="9">
          <TechCard mode={isAppMode(appMode)}>
            <Image
              width="100"
              height="110"
              src="/image/icons_graphics/Asset6.png"
              alt="techaz"
            />
            <Typography font="25" color={colorMode()} text="true">
              trend texnologiyası və startap xəbərləri
            </Typography>
          </TechCard>
          <TechCard mode={isAppMode(appMode)}>
            <Image
              width="100"
              height="110"
              src="/image/icons_graphics/Asset9.png"
              alt="techaz"
            />
            <Typography font="25" color={colorMode()} text="true">
              ən son gadget rəyləri
            </Typography>
          </TechCard>
          <TechCard mode={isAppMode(appMode)}>
            <Image
              width="100"
              height="110"
              src="/image/icons_graphics/Asset7.png"
              alt="techaz"
            />
            <Typography font="25" color={colorMode()} text="true">
              beynəlxalq texnologiya hadisələrindən canlı yayımlar
            </Typography>
          </TechCard>
          <TechCard mode={isAppMode(appMode)}>
            <Image
              width="100"
              height="110"
              src="/image/icons_graphics/Asset8.png"
              alt="techaz"
            />
            <Typography font="25" color={colorMode()} text="true">
              yeniliklərə dair xüsusi məqalələr
            </Typography>
          </TechCard>
        </TechContentInfo>
      </TechContentRow>
    </TechContentStyled>
  );
};
