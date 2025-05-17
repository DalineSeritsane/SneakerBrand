import React from 'react'
import './offers.css';
import exclusive from '../Assets/exclusive.jpg';

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-Left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY THE BEST SNEAKER PRODUCTS TO MATCH YOUR VIBE</p>
            <button>Check Now!</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive} alt='Dragon custom made Nike Air' />
        </div>
      
    </div>
  )
}

export default Offers
