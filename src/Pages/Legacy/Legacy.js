import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Legacy.css";

const Legacy = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products ">
      <div className="products-container">
        {products.map((product) => (
          <Product
            addToCart={addToCart}
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Legacy;
