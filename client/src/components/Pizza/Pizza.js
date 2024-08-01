import React from 'react'
import './Pizza.css'

function Pizza({pizza}) {
  return (
    <>
    <h1>{pizza.name}</h1>
    <img src={pizza.image} alt='pizza-image' className='img-fluid pizza-img'/>
    <div className='flex-container'>
        <div className='w-100'>
            <p>Varients</p>
            <select>
                {pizza.varients.map(varient=>{
                    return <option value={varient}>{varient}</option>
                })}
            </select>
        </div>
        <div className='w-100'>
            <p>Quantity</p>
            <select>
                {[...Array(10).keys()].map(( i)=>{
                    return <option value={i+1}>{i+1}</option>
                })}
            </select>
        </div>
    </div>
    </>
  )
}

export default Pizza