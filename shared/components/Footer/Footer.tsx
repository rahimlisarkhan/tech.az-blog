import { FooterStyled, FooterContainer } from "./Footer.styled";
import React from "react";
import { Image } from "ui/Image";
import Typography from "ui/Typograph";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Image src="/image/logo.png" width="70" height="70" cover isNotLoading />
        <Typography color="white" font="14" text="lower">
          © copyright 2022 | tech.az
        </Typography>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
