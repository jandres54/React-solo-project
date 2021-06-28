import React from 'react'
import {useSelector} from 'react-redux'
import CartCard from './CartCard';
import { createClient } from '@supabase/supabase-js'
import "./css/Cart.css"
import { useDispatch } from "react-redux";
import { resetCart } from "../actions/resetAction"



const supabase = createClient("https://lpqjxipbnitegvmfnjzp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzk1ODMxMCwiZXhwIjoxOTM5NTM0MzEwfQ.I3vB-rlUp0EGByKUSLOiRorZcAcsdzOOC5a3iqc63_k")

export default function Cart(props) {
    const dispatch = useDispatch();
    const addedToCart = useSelector((state) => state.cartReducer);
    async function checkout   () {
      const { data, error } = await supabase
      .from('Shoes')
      .insert(addedToCart)
    
      resetCart(dispatch, [])
    }
    console.log(addedToCart);
    return (
      <>
      <div className="prod-in-cart">
        
        {addedToCart.map((product) => (
          <CartCard key={product.id}product={product} />
        ))}
        
      </div>
      <button className="checkout" type="submit" onClick={() => (checkout())}> checkout </button>
      </>
    );
  }



  // how to clear the data in table
  // why are the sandals not showing in DB