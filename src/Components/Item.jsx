import React from "react";
import { useCart} from "../Context/Counter";

const Item = (props) => {
  const cart = useCart();
  const addItemToCart = () => {
    cart.setItems([
      ...cart.items,
      {name: props.name, price: parseInt(props.price) },
    ]);
  };
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
      <button onClick={addItemToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
