import React, { useContext } from "react";
import { CartContext } from "../Context/Counter";
const Item = (props) => {
  const cart = useContext(CartContext);

  return (
    <div
      className="item-card"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
