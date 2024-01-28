
import React from 'react'

export default function Product({image , shiftImageBack, shiftImageForward}) {

  return ( 
    <div className="product">
      <img src={image} />
      <button onClick={shiftImageBack}>Previous</button>
      <button onClick={shiftImageForward}>Next</button>
    </div>    
  )
}
