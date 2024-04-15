import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommenting, faPen } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${productId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  // Generate stars based on the rating
  const stars = [];
  for (let i = 0; i < product.rating?.rate; i++) {
    stars.push(<span key={i}>★</span>);
  }
  // Fill the remaining stars with empty stars
  for (let i = product.rating?.rate; i < 4; i++) {
    stars.push(<span key={i}>&nbsp;☆</span>);
  }

  return (
    <div>
      <div className="product-details-container">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="product-titles">
          <h4>{product.title}</h4>
          <div
            className="d-flex justify-content-start align-items-center gap-3 comments
          "
          >
            <p>{stars}</p>

            <p>
              <FontAwesomeIcon icon={faCommenting} />
            </p>

            <p>
              Read Reviews (1) <FontAwesomeIcon icon={faPen} />
            </p>
            <p>Write reviews</p>
          </div>
          <div className="d-flex justify-content-start align-items-center gap-3 comments mb-4">
            <h3>
              <del>100</del>
            </h3>
            <h3> ${product.price}</h3>
            <button>-5%</button>
          </div>
          <div className="divider"></div>
          <div className="mt-4">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
