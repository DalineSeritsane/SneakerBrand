import React from 'react'
import "./productDisplay.css"
import stars_icon from "../Assets/stars_icon.jpg";

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='product-display'>
        <div className='product-display-left'>
            <div className='product-display-img-list'>
                <img src={product.image} alt=''/>
                 <img src={product.image} alt=''/>
                  <img src={product.image} alt=''/>
                   <img src={product.image} alt=''/>
            </div>
            <div className='product-display-img'>
                <img className='product-display-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='product-display-right'>
            <h1>{product.name}</h1>
            <div className='product-display-right-star'>
                <img src={stars_icon} alt=''/>
                <img src={stars_icon}alt=''/>
                <img src={stars_icon}alt=''/>
                <img src={stars_icon} alt=''/>
                <img src={stars_icon} alt=''/>
                <p>(188)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price">{product.price}</div>
            </div>


        </div>

      
    </div>
  )
}

export default ProductDisplay
