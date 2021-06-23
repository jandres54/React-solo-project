import React from 'react'
import {useSelector} from 'react-redux'
import CartCard from './CartCard';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient("https://lpqjxipbnitegvmfnjzp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzk1ODMxMCwiZXhwIjoxOTM5NTM0MzEwfQ.I3vB-rlUp0EGByKUSLOiRorZcAcsdzOOC5a3iqc63_k")

export default function Cart(props) {
    const addedToCart = useSelector((state) => state.cartReducer);
    async function checkout   () {
      const { data, error } = await supabase
      .from('Shoes')
      .insert(addedToCart)
    
  
    }
    console.log(addedToCart);
    return (
      <div>
        
        {addedToCart.map((product) => (
          <CartCard key={product.id}product={product} />
        ))}
        <button className="checkout" type="submit" onClick={() => (checkout())}> checkout </button>
      </div>
    );
  }
