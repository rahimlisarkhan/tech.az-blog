import { ImageContent } from "./Image.styled";
import Image from "next/image";

export type ImageType = {
  width?: string;
  height?: string;
  cover?: boolean | undefined;
  src?: string;
  alt?: string;
  radius?: boolean | undefined;
  onClick?: () => void;
};

export const ImageTag = ({
  width,
  height,
  alt,
  cover,
  src,
  radius,
  onClick,
}: ImageType) => {

  console.log("src",width);
  console.log("src",height);
  
  return (
    <ImageContent
      onClick={onClick}
      width={width}
      height={height}
      radius={radius}
    >
      <Image
        layout="fill"
        alt={alt}
        src={src}
        objectFit={cover ? "cover" : "contain"}
      />
    </ImageContent>
  );
};
