import React from "react";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../images/banner/shop-hero-1-product-slide-1.jpg";
import banner2 from "../../images/banner/shop-hero-3-product-slide-2.jpg";
import banner3 from "../../images/banner/young-excited-woman-casual-outfit-showing-banner-pointing-fingers-left-aside-copy-space-standing-against-pink-background.jpg";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="carousel-banner">
      <Carousel>
        <Carousel.Item>
          <img src={banner1} alt="" />
          <Carousel.Caption className="carousel-caption">
            <div className="caption">
              <h5>SUMMER 2024</h5>
              <h3>NEW COLLECTION</h3>
              <p>
                We know how large objects will act, <br /> but things on a small
                scale.
              </p>
              <Button variant="success">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner3} alt="" />
          <Carousel.Caption className="carousel-caption">
            <div className="caption">
              <h5>SUMMER 2024</h5>
              <h3>NEW COLLECTION</h3>
              <p>
                We know how large objects will act, <br /> but things on a small
                scale.
              </p>
              <Button variant="success">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner2} alt="" />
          <Carousel.Caption className="carousel-caption">
            <div className="caption">
              <h5>SUMMER 2024</h5>
              <h3>NEW COLLECTION</h3>
              <p>
                We know how large objects will act, <br /> but things on a small
                scale.
              </p>
              <Button variant="success border-0">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
