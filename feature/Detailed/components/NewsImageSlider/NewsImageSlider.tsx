import { IconButton } from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import {Image} from "../../../../shared/components/Image";
import { SliderImage } from "./NewsImageSlider.styled";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <p
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IconButton />
    </p>
  );
};

export const NewsImageSlider = ({ images, url }: any) => {
  let [nav1, setNav1] = useState(0);
  let [nav2, setNav2] = useState(0);

  const slider2Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <h1>Prev</h1>,
  };
  return (
    <>
      <Slider asNavFor={nav2} ref={(slider) => setNav1(slider)} arrows={false}>
        {images?.map((item, index) => {
          return (
            <SliderImage key={`slide-nav-1-${index}`}>
              <Image cover height="550" src={url + item.image} />
            </SliderImage>
          );
        })}
      </Slider>
      <br />
      {images.length > 1 && (
        <Slider
          asNavFor={nav1}
          ref={(slider) => setNav2(slider)}
          {...slider2Settings}
        >
          {images?.map((item, index) => {
            return (
              <SliderImage key={`slide-nav-2-${index}`}>
                <Image cover height="150" src={url + item.image} />
              </SliderImage>
            );
          })}
        </Slider>
      )}
    </>
  );
};
