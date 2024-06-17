import React from "react";

const Item = (props) => {
    return (
        <div className="item-card" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h4>{props.name}</h4>
            <p>Price: ${props.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Item;