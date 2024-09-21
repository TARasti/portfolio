import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = ({data}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
            {
                data.map(d => (
                    <div className="my-3" key={d.id} >
                        {d.html_content}
                    </div>
                ))
            }
            </Slider>
        </div>
    );
}

export default SlickSlider;
