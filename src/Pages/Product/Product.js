import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { rating, image, id, title, price } = product;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`product/${id}`);
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
    <div className="products">
      <div className="product">
        <div className="card">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="cards-button">
            <button
              onClick={() => navigateToProductDetail(id)}
              className="quickView"
            >
              Quick View
            </button>
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart mt-1"
            >
              Add To Cart
            </button>
          </div>
          <div className="card-body">
            <h3>{title}</h3>
            <p className="card-text">{stars}</p>
            <h6>{price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
