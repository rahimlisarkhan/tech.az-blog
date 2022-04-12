import { TypographyText } from "./Typograph.styled";

interface TypographyProps {
  font?: string;
  color?: string;
  text?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
  bold?: "true";
}

export const Typograph = ({
  as: Component = "div",
  font,
  color,
  bold,
  text,
  children,
}: TypographyProps) => {
  return (
    <Component>
      <TypographyText font={font} text={text} color={color} bold={bold}>
        {children}
      </TypographyText>
    </Component>
  );
};
