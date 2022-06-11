import { isAppMode } from "shared/utils/isAppMode";
import { ButtonStyled } from "./Button.styled";

interface ButtonType {
  icon: any;
  radius: string;
  width: string;
  height: string;
  bg: string;
  color: string;
  padding: string;
  font: string;
  bold: string;
  margin: string;
  text: string;
  cursor: boolean;
  onClick: (e: Event) => void;
}

export const Button = ({
  icon,
  radius,
  bg,
  color,
  font,
  bold,
  padding,
  margin,
  text,
  cursor,
  height,
  width,
  onClick,
}: Partial<ButtonType>) => {
  return (
    <ButtonStyled
      color={color}
      bg={bg}
      font={font}
      width={width}
      height={height}
      bold={bold}
      radius={radius}
      padding={padding}
      margin={margin}
      cursor={isAppMode(cursor)}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </ButtonStyled>
  );
};
