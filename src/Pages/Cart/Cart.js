import React, { useEffect } from "react";

const Cart = ({ cart, setCart }) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <h2>This is cart</h2>
      <p>Cart Length:{cart.length}</p>
    </div>
  );
};

export default Cart;
