import React from 'react'
import Product from './Product'
import CategoryButton from './CategoryButton'
import { useState } from 'react';
export default function Gallery({currentImage ,dataImages , shiftImageBack, shiftImageForward}) 
{

    return(
    <div>
        <div>      
            <Product image={dataImages[currentImage]} shiftImageBack={shiftImageBack} shiftImageForward={shiftImageForward} />
        </div>
    </div>

    )


}