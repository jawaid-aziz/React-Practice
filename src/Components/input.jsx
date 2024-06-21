import React from "react";

const Input = (props) => {
    return(
        <input className="inputField" placeholder="{props.placeholder}" value={props.value} onChange={props.onChange}/>
    );
};

export default Input;