import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

interface SmallCarouselProp {
  brandArray: string[];
  speedNumber: number;
};

export const SmallCarousel: React.FC<SmallCarouselProp> = ({ brandArray, speedNumber }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: speedNumber,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
  };

  return (
      <div>
        <Slider {...settings}>
              {brandArray.map((item, index) => (
                  <div key={index}>
                      <img  src={item} className="w-[150px] h-[150px]"/>
                  </div>
              ))}
        </Slider>
      </div>
    )
  };
