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
            <h1>Products</h1>
            <div className="products-card">
                {products.map((productsFromCache)=> {
                    return( <ProductsCard productsFromCache={productsFromCache}/>)
                })}

            </div>
            
            
        </div>
    )
}