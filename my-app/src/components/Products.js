import React from 'react'
import { useState, useEffect} from "react";
import {ProductData} from "./ProductData";
import ProductsCard from './ProductsCard';



export default function Products() {
    const [ products, setProducts ] = useState([])
    const [ form, setForm ] = useState('')
   
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        setProducts(ProductData.Products)
        
    }, [])
    console.log(products)
    return (
        <div className="prod-container">
            
            <div className="products-card">
                
                {products.map((productsFromCache)=> {
                    console.log(productsFromCache)
                    return( <ProductsCard key={productsFromCache.id} productsFromCache={productsFromCache}/>)
                })}

            </div>
            
            
        </div>
    )
}