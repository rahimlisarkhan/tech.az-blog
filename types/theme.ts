import { boxModel } from "styles/boxModel";
import { colors } from "styles/color";
import { font } from "styles/font";
import { breakpoint } from "styles/breakpoint";
export interface TypographProps<T> {
  color?: string;
  font?: string;
  bold?: string;
  center?: string;
  margin?: string;
  text?: string;
  theme?: T;
}

export interface ThemeProps {
  colors?: typeof colors;
  font?: typeof font;
  boxModel?: typeof boxModel;
  breakpoint?: typeof breakpoint;
}
