import React from 'react'
import "./breadcrum.css"
import arrowIcon from "../Assets/blue_arrow.jpg"

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='bread-crum'>
        HOME <img className='bread-crum-arrowIcon' src={arrowIcon} alt=''/> SHOP <img className='bread-crum-arrowIcon' src={arrowIcon} alt=''/>
         {product.category} <img className="bread-crum-arrowIcon" src={arrowIcon} alt=''/>
         {product.name}

      
    </div>
  )
}

export default Breadcrum
