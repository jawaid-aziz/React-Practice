import React, { useContext } from "react";
import { CartContext } from "../Context/Counter";

const Cart = () => {
    
    const cart = useContext(CartContext);
    return (
        <div className="cart" style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
            <h1>Cart</h1>
            {
                cart && cart.items.map((item) => (
                    <li>
                        {item.name} - ${item.price}
                    </li>
                ))
            }
            <li>Pendrive - $200</li>
            <h5>Total Bill: $</h5>
        </div>
    );
};

export default Cart;