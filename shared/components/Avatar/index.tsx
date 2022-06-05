import * as React from "react";
import Avatar from "@mui/material/Avatar";

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
  xs: { width: 16, height: 16 },
  sm: { width: 20, height: 20 },
  md: { width: 24, height: 24 },
  lg: { width: 56, height: 56 },
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
  return <Avatar src={image} sx={sizes[size]} {...stringAvatar(name)} />;
};

export { UserAvatar as Avatar };
