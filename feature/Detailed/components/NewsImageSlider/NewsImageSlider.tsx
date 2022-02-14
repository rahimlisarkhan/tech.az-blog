import { IconButton } from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import Image from "../../../../components/Image"
import { SliderImage } from "./NewsImageSlider.styled";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return <p className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}><IconButton /></p>
}


export const NewsImageSlider = ({ images }: any) => {

    let [nav1, setNav1] = useState(0);
    let [nav2, setNav2] = useState(0);



    const slider2Settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <h1>Prev</h1>,
    };
    return (
        <>
            <Slider
                asNavFor={nav2}
                ref={slider => (setNav1(slider))}
                arrows={false}
            >
                {images?.map(item => {
                    return <SliderImage>
                        <Image cover="true" height="450" src={item.image} />
                    </SliderImage>
                })}
                {/* {this.props.images.map((image, index) => (
          <div class='carousel-image' key={index}>
            <img src={`${this.props.imgUrl}${image.image}`} />
          </div>
        ))} */}

            </Slider>
            <br />
            <Slider
                asNavFor={nav1}
                ref={slider => (setNav2(slider))}
                {...slider2Settings}

            >
                <SliderImage>
                    <Image cover="true" height="150" src={"https://i.insider.com/60117b551d2df20018b71117?width=1136&format=jpeg"} />
                </SliderImage>
                <SliderImage>
                    <Image cover="true" height="150" src={"https://i.pcmag.com/imagery/reviews/01pr6hmgqz7A5wX5hSQWqRs-1.fit_lim.size_625x365.v1632764534.jpg"} />
                </SliderImage>
                <SliderImage>
                    <Image cover="true" height="150" src={"https://i5.walmartimages.com/asr/821904e1-ee25-4e1c-a732-61ab857c07a7.d752787231d8292db51105ff96ed65e9.jpeg"} />
                </SliderImage>
                <SliderImage>
                    <Image cover="true" height="150" src={"https://i5.walmartimages.com/asr/821904e1-ee25-4e1c-a732-61ab857c07a7.d752787231d8292db51105ff96ed65e9.jpeg"} />
                </SliderImage>
                {/* {this.props.images.map((image, index) => (
          <div class='carousel-image' key={index}>
            <img src={`${this.props.imgUrl}${image.image}`} />
          </div>
        ))} */}

            </Slider>
        </>

    )
}