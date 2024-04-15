import React, { useEffect, useState } from "react";
import LimitedProduct from "../LimitedProduct/LimitedProduct";
import "./Deficient.css";

const Deficient = ({ addToCart }) => {
  const [limitedProduct, setLimitedProduct] = useState([]);
  const productt = limitedProduct.slice(0, 3);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setLimitedProduct(data));
  }, []);

  return (
    <div className="limited-products-container">
      <h4>FEATURED PRODUCTS</h4>
      <h2>BEST SELLER PRODUCTS</h2>
      <p>Problems trying to resolve the conflict between </p>
      <div className="limited-products">
        {productt.map((product) => (
          <LimitedProduct
            addToCart={addToCart}
            key={product.id}
            limitedProduct={product}
          ></LimitedProduct>
        ))}
      </div>
    </div>
  );
};

export default Deficient;
