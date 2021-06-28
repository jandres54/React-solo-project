import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../actions/removeFromCart";
import "./css/Cart.css"

export default function CartCard(props) {
  const dispatch = useDispatch();
  return (
    <div className="prod-card">
      <p>{props.product.name}</p>
      <img className="prod-img" src={props.product.image} alt="" />
      <p>{props.product.description}</p>
      
      <button onClick={() => removeFromCart(dispatch, props.product.sku)}>
        Remove
      </button>
    </div>
  );
}

