import React from 'react'
import {useSelector} from 'react-redux'
import CartCard from './CartCard';

export default function Cart(props) {
    const addedToCart = useSelector((state) => state.cartReducer);
    console.log(addedToCart);
    return (
      <div>
        
        {addedToCart.map((product) => (
          <CartCard key={product.id}product={product} />
        ))}
      </div>
    );
  }
