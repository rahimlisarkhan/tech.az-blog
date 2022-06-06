import * as React from "react";
import { AvatarStyled } from "./Avatar.styled";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xca;
    color += `1a${value.toString(15)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

const sizes = {
  xs: { width: 16, height: 16, font: 12 },
  sm: { width: 20, height: 20, font: 14 },
  md: { width: 24, height: 24, font: 18 },
  lg: { width: 36, height: 36, font: 20 },
};


const UserAvatar = ({
  name,
  image,
  size,
}: {
  name: string;
  image: string;
  size: string;
}) => {


  console.log(sizes[size],"size");
  

  return (
    <AvatarStyled
      alt={name}
      src={image}
      sx={{ width: 16, height: 16 }}
      {...sizes[size]}
      {...stringAvatar(name)}
    />
  );
};

export { UserAvatar as Avatar };
