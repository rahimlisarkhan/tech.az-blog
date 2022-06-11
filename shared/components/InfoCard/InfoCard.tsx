import { Avatar } from "ui/Avatar";
import Typograph from "ui/Typograph";
import { Content } from "./InfoCard.styled";

interface InfoType {
  name: string;
  surname: string;
  email: string;
  image?: string;
  dark?: boolean;
  size?: string;
}

export const InfoCard = ({
  name,
  surname,
  email,
  dark,
  image,
  size,
}: InfoType) => {
  const sizes = {
    xs: { font: "12", smallFont: "6", avatar: "xs" },
    sm: { font: "14", smallFont: "8", avatar: "sm" },
    md: { font: "16", smallFont: "10", avatar: "md" },
    lg: { font: "18", smallFont: "12", avatar: "lg" },
    xl: { font: "20", smallFont: "14", avatar: "xl" },
  };

  return (
    <Content>
      <Avatar name={name} image={image} size={sizes[size ?? "md"].avatar} />
      <div>
        <Typograph
          color={dark ? "dark" : "whiteGray"}
          font={sizes[size ?? "md"].font}
          margin="0 10px"
        >
          {name} {surname}
        </Typograph>
        <Typograph
          font={sizes[size ?? "md"].smallFont}
          color={dark ? "dark" : "whiteGray"}
          margin="0 10px"
        >
          {email}
        </Typograph>
      </div>
    </Content>
  );
};
