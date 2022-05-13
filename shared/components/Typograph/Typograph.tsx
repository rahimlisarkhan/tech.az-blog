import { TypographyText } from "./Typograph.styled";

interface TypographyProps {
  font?: string;
  color?: string;
  text?: string;
  margin?: string;
  as?: React.ElementType;
  children?: React.ReactNode | string;
  innerHTML?: boolean;
  bold?: "true";
}

export const Typograph = ({
  as: Component = "div",
  font,
  color,
  margin,
  bold,
  text,
  innerHTML,
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
        {typeof children === "string" && innerHTML ? (
          <div dangerouslySetInnerHTML={{ __html: children }} />
        ) : (
          children
        )}
      </TypographyText>
    </Component>
  );
};
