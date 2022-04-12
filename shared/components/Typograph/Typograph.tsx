import { TypographyText } from "./Typograph.styled";

interface TypographyProps {
  font?: string;
  color?: string;
  text?: string;
  margin?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
  bold?: "true";
}

export const Typograph = ({
  as: Component = "div",
  font,
  color,
  margin,
  bold,
  text,
  children,
}: TypographyProps) => {
  return (
    <Component>
      <TypographyText
        font={font}
        text={text}
        margin={margin}
        color={color}
        bold={bold}
      >
        {children}
      </TypographyText>
    </Component>
  );
};
