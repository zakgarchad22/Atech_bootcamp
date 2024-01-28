
import React from 'react'
import Product from './Product'
import "./Products.css"


export default function Products({products}) {

    return (
      
        <div id='products'>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
  
     
        
    )
  }
  