import React from 'react'
import './item.css'
// import props from "../Assets/Dunk-high1.jpg";

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt='Sneaker'/>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                {props.price}
            </div>
        </div>

      
    </div>
  )
}

export default Item
