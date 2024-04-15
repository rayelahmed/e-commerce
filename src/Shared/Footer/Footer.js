import React from "react";
import "./Footer.css";
import footerlogo from "../../images/logo/footer-logo2.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-titles">
            <a href="">
              <h2 className="footer-title">aboss.</h2>
            </a>
            <div className="">
              <ul className="social-style">
                <li>
                  <a href="https://www.facebook.com/rayel.ahmed.50309277">
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/RayelAhmed10">TWITTER</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCNN99qtINDsc91XOHFzj0ag">
                    YOUTUBE
                  </a>
                </li>
                <li>
                  <a href="https://www.plus.google.com">GOOGLE+</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ahmed.turjo_404/">
                    INSTRAGRAM
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-logo">
              <a href="">
                {" "}
                <img src={footerlogo} alt="" />{" "}
              </a>
            </div>
            <div className="footer-adress">
              <div>
                <p className="no-wrap">
                  Address : 123 Main Street, Anytown, CA 12345 USA.
                </p>
              </div>
              <div>
                <p className="no-wrap">Phone : (800) 123 456 789</p>
              </div>
              <div>
                <p className="no-wrap">
                  Email :
                  <a
                    href="mailto:rayelahhmed404@gmail.com"
                    className="footer-email"
                  >
                    rayelahhmed404@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-color w-100"></div>
            <div className="footer-bottom">
              <div className="copyright">
                <p className="copyright-text">
                  © 2021 Aboss Made with ❤️ by{" "}
                  <span className="dev-name">rayelahmed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
