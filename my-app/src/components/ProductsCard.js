import React from 'react'


export default function ProductsCard(props) {
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
            
            <button className="add-to-cart">Add to cart</button>
        </div>
    )
}
