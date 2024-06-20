import React from "react";
import { useCart } from "../Context/Counter";

const Cart = () => {
  const cart = useCart();
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div
      className="cart"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        ,flexDirection: "column",
      }}
    >
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - ${item.price}
          </li>
        ))}
      <h5>Total Bill: ${total}</h5>
    </div>
  );
};

export default Cart;
