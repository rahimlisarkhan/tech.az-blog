import { TypographyText } from "./Typograph.styled";

interface TypographyProps {
  font?: string;
  color?: string;
  center?: string;
  text?: string;
  cursor?: string;
  decaration?: string;
  space?: string;
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
  cursor,
  decaration,
  margin,
  bold,
  space,
  center,
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
        center={center}
        bold={bold}
        cursor={cursor}
        decaration={decaration}
        space={space}
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
