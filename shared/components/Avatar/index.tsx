import * as React from "react";
import Avatar from "@mui/material/Avatar";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xca;
    color += `1a${value.toString(15)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  if (!name) return;

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

const BackgroundLetterAvatars = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => {
  return <Avatar src={image} {...stringAvatar(name)} />;
};

export { BackgroundLetterAvatars as Avatar };
