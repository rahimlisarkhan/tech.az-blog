import { isAppMode } from "shared/utils/isAppMode";
import { ThemeProps } from "types/theme";
import { IconContent } from "./IconButton.styled";

export interface IconType {
  color?: string;
  size?: string;
  cursor?: boolean;
  font?: string;
  content?: string;
  text?: string;
  margin?: string;
  theme?: ThemeProps;
  children?: React.ReactNode | JSX.Element;
  onClick?: () => void;
}

export const IconButton = ({
  color,
  size,
  cursor,
  text,
  font,
  margin,
  content,
  children,
  onClick,
}: IconType) => {
  return (
    <IconContent
      color={color}
      cursor={isAppMode(cursor)}
      font={font}
      text={text}
      size={size}
      margin={margin}
      onClick={onClick}
    >
      {children}
      <span>{content}</span>
    </IconContent>
  );
};
