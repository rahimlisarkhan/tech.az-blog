import Slider from "react-slick";
import { Image } from "../Image";
import { SliderImage } from "./Slider.styled";

export const SliderContent = ({ content, data, slidesToShow = 4 }) => {
  const slider2Settings = {
    swipeToSlide: true,
    slidesToScroll: 3,
    centerMode: data?.length > 1 ? true : false,
    focusOnSelect: true,
    slidesToShow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...slider2Settings}>
      {data?.map((item) => {
        return (
          <SliderImage key={`slider-id-${item.id}`}>
            {content(item)}
          </SliderImage>
        );
      })}
    </Slider>
  );
};
