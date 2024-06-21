import React from "react";

const Button = () => {
    return (
        <button className="btn" onClick={props.onClick}>
        {props.value}
    </button>
    );
};

export default Button;