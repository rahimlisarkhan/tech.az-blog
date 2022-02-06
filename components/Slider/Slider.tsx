import Slider from "react-slick";
import Image from "../Image"
import { SliderImage } from "./Slider.styled";




export const SliderContent = ({ content, data,slidesToShow = 4 }) => {

    const slider2Settings = {
        dots: true,
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode:true,
        focusOnSelect: true,
    };
    return (
        <Slider
            {...slider2Settings}
        >
            {data?.map(item => {
                return <SliderImage key={`slider-id-${item.id}`}>
                    {content(item)}
                </SliderImage>
            })}


        </Slider>
    )
}