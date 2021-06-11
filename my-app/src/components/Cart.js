import React from 'react'
import {useSelector} from 'react-redux'
import CartCard from './ProductsCard';

export default function Cart() {
    const addedToCart = useSelector((state) => state.cart);
    console.log(addedToCart);
    return (
      <div>
        <h1>Cart</h1>
        <img src={addedToCart.image} alt="" />
        {addedToCart.map((product) => (
          <CartCard product={product} />
        ))}
      </div>
    );
  }
