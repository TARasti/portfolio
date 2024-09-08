import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
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
                <div className="my-3" >
                    <i className="fa-brands fa-html5 fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-brands fa-css3-alt fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-brands fa-js fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-brands fa-node fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-brands fa-react fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-brands fa-python fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-brands fa-laravel fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-brands fa-github fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-brands fa-git-alt fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-brands fa-docker fa-2xl hover"></i>
                </div>
                <div className="my-3">
                    <i className="fa-solid fa-database fa-2xl hover"></i>
                </div>
            </Slider>
        </div>
    );
}

export default SlickSlider;
