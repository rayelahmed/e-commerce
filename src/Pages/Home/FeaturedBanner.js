import React from "react";

import men from "../../images/editors-pick/filter.png";
import women from "../../images/editors-pick/women.png";
import accessories from "../../images/editors-pick/accessories.png";
import kids from "../../images/editors-pick/kids.png";
import "./FeaturedBanner.css";
import { Button } from "react-bootstrap";
const FeaturedBanner = () => {
  return (
    <section className="editors-pick">
      <h4>EDITOR’S PICK</h4>
      <p>Problems trying to resolve the conflict between </p>
      <div className="picks-pro">
        <div className="men">
          <img src={men} alt="" />
          <div className="img-desc">
            <Button variant="light">MEN</Button>
          </div>
        </div>
        <div className="women">
          <img src={women} alt="" />
          <div className="img-desc">
            <Button variant="light">WOMEN</Button>
          </div>
        </div>
        <div className="ac-kids ">
          <div className="accessories">
            <img src={accessories} alt="" />
            <div className="img-desc">
              <Button variant="light">ACCESSORIES</Button>
            </div>
          </div>
          <div className="kids">
            <img src={kids} alt="" />
            <div className="img-desc">
              <Button variant="light">KIDS</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
