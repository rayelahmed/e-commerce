import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AddQuantity.css";

const AddQuantity = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleUpdate = (event) => {
    event.preventDefault();

    const qurrentQuantity = event.target.quantity.value;
    const quantity = parseInt(product.quantity) + parseInt(qurrentQuantity);
    const updateQuantity = { quantity };

    fetch(`http://localhost:5000/product/${productId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="add-quantity align-items-center">
      <form
        className="d-flex align-items-center  flex-column"
        action=""
        onSubmit={handleUpdate}
      >
        <label htmlFor="">Add Quantity</label>
        <input type="number" name="quantity" required />
        <br />
        <input className="mb-2 submit-btn" type="submit" value="Add Quantity" />
      </form>
    </div>
  );
};

export default AddQuantity;
