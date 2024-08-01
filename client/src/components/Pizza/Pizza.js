import React, { useState } from 'react'
import './Pizza.css'

function Pizza({ pizza }) {
    const { quantity, setQuantity } = useState(1);
    const { varient, setVarient } = useState('small');
    return (
        <>
            <h1 className='pizza-name'>{pizza.name}</h1>
            <img src={pizza.image} alt='pizza-image' className='img-fluid pizza-img' />
            <div className='flex-container'>
                <div>
                    <p className='type-nm'>Varients</p>
                    <select
                        className='select-input'
                        value={varient}
                        onChange={(e) => { setVarient(e.target.value) }}
                    >
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div>
                    <p  className='type-nm'>Quantity</p>
                    <select
                        className='select-input'
                        value={quantity}
                        onChange={(e) => { setQuantity(e.target.value) }}
                    >
                        {[...Array(10).keys()].map((i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className='flex-container'>
                <div className='second-sub-div w-100'>
                    <h1>Price : {pizza.prices[0][varient] * quantity}</h1>
                </div>
                <div className='second-sub-div w-100'>
                    <button className='cart-button'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Pizza