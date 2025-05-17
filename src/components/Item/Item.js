import React from 'react'
import './item.css'
import props from "../Assets/Dunk-high1.jpg";

const Item = () => {
  return (
    <div className='item'>
        <img src={props} alt='Dunk High'/>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                {props.new_price}
            </div>
        </div>

      
    </div>
  )
}

export default Item
