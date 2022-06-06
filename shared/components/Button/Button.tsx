import { ButtonStyled } from "./Button.styled";

interface ButtonType {
  icon: any;
  radius: string;
  bg: string;
  color: string;
  padding: string;
  font: string;
  bold: string;
  margin: string;
  text: string;
  cursor: string;
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
  onClick,
}: Partial<ButtonType>) => {
  return (
    <ButtonStyled
      color={color}
      bg={bg}
      font={font}
      bold={bold}
      radius={radius}
      padding={padding}
      margin={margin}
      cursor={cursor}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </ButtonStyled>
  );
};
