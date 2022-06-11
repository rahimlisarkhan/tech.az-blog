import { ImageContent } from "./Image.styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typography from "../Typograph";

export type ImageType = {
  width?: string;
  height?: string;
  cover?: boolean | undefined;
  isNotLoading?: boolean;
  src?: string | StaticImageData;
  alt?: string;
  radius?: string;
  onClick?: () => void;
};

export const ImageTag = ({
  width,
  height,
  isNotLoading,
  alt,
  cover,
  src,
  radius,
  onClick,
}: ImageType) => {
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    setImageLoading(true);
  }, []);
  return (
    <ImageContent
      onClick={onClick}
      width={width}
      height={height}
      radius={radius}
    >
      {/* {imageLoading && <Skeleton variant="rectangular" width={width} height={height} />} */}
      {imageLoading && !isNotLoading && (
        <Typography color="gray">
          Loading...
        </Typography>
      )}
      <Image
        layout="fill"
        priority
        onLoad={() => setImageLoading(false)}
        alt={alt}
        src={src}
        objectFit={cover ? "cover" : "contain"}
      />
    </ImageContent>
  );
};
