import React from "react";
import "./shoppingButton.css";
function ShoppingButton(props) {
  return (
    <button className={props.className} type="button" onClick={props.action}>
      {props.label}
    </button>
  );
}

export default ShoppingButton;
