import React from "react";
import { useNavigate } from "react-router-dom";
import "./LimitedProduct.css";
import { FaStar } from "react-icons/fa6";

const LimitedProduct = ({ limitedProduct, addToCart }) => {
  const { rating, image, id, price, title, description } = limitedProduct;
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  // Generate stars based on the rating
  const stars = [];
  for (let i = 0; i < rating.rate; i++) {
    stars.push(<span key={i}>★</span>);
  }
  // Fill the remaining stars with empty stars
  for (let i = rating.rate; i < 4; i++) {
    stars.push(<span key={i}>&nbsp;☆</span>);
  }

  return (
    <div className="limited-product-container">
      <div className="limited-product">
        <div className="card">
          <div className="img" onClick={() => navigateToProductDetail(id)}>
            <img src={image} alt="" />
          </div>

          <div className="card-body">
            <h4>{title}</h4>

            <p>
              {description.slice(0, 40)}
              <button
                className="read-more"
                onClick={() => navigateToProductDetail(id)}
              >
                ...read more
              </button>
            </p>
            <h6 style={{ color: "#23856D" }}>${price}</h6>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div
                  className="card-text d-flex align-items-center justify-content-start"
                  style={{ color: "#23856D" }}
                >
                  <div>
                    <p>{rating.rate}</p>
                  </div>
                  <div>
                    <p style={{ marginTop: "-5px", marginLeft: "5px" }}>
                      <FaStar />
                    </p>
                  </div>
                </div>
                <h4>{rating.count} Reviews</h4>
              </div>
              <button
                onClick={() => addToCart(limitedProduct)}
                className="addToCart"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedProduct;
