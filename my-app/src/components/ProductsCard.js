import React from 'react'
import { addToCart } from '../actions/cartActions'
import { useDispatch } from "react-redux";

export default function ProductsCard(props) {
    const dispatch = useDispatch();
    return (
        <div className="main-container">
            
            <img className="prod-img" src={props.productsFromCache.image} alt="" />

            <p className="prod-name">
                {props.productsFromCache.name}
            </p>
            <p className="prod-id">
                {props.productsFromCache.id}
            </p>
            <p className="prod-price">
                {props.productsFromCache.price}
            </p>
            
            <button className="add-to-cart" onClick={() => addToCart(dispatch, props.productsFromCache)}>Add to cart</button>
        </div>
    )
}
