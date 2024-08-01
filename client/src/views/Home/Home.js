import React from 'react'
import './Home.css'
import pizzas from '../../data'
import Pizza from '../../components/Pizza/Pizza'
function Home() {
  return (
    <>
        <div className='row'>
            {pizzas.map(pizza =>{
                return <div className='col-md-4'>
                    <div className='pizza-div'>
                        <Pizza pizza={pizza}/>
                    </div>
                </div>
            })}
        </div>
    </>
  )
}

export default Home