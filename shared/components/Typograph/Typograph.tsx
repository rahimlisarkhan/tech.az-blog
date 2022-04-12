import { TypographyText } from "./Typograph.styled";

interface TypographyProps {
  font?: string;
  color?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
  bold?: "true";
}

export const Typograph = ({
  as: Component = "div",
  font,
  color,
  bold,
  children,
}: TypographyProps) => {
  return (
    <Component>
      <TypographyText font={font} color={color} bold={bold}>
        {children}
      </TypographyText>
    </Component>
  );
};
