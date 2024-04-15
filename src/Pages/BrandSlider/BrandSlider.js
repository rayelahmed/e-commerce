import React from "react";
import "./BrandSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../../images/logo/b1.jpg";
import logo2 from "../../images/logo/b2.jpg";
import logo3 from "../../images/logo/b3.jpg";
import logo4 from "../../images/logo/b4.jpg";
import logo5 from "../../images/logo/b5.jpg";

const BrandSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="brand-slider">
      <Carousel responsive={responsive}>
        <div>
          <img src={logo1} alt="" />
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
        <div>
          <img src={logo3} alt="" />
        </div>
        <div>
          <img src={logo4} alt="" />
        </div>
        <div>
          <img src={logo5} alt="" />
        </div>
        <div>
          <img src={logo5} alt="" />
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default BrandSlider;
