import React, {useContext} from 'react'
import "./productDisplay.css"
import stars_icon from "../Assets/stars_icon.jpg";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='product-display'>
        <div className='product-display-left'>
            <div className='product-display-img-list'>
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
            <div className="product-display-right-prices">
                <div className="product-display-right-price">{product.price}</div>
            </div>
            <div className='product-display-right-description'>
                Puma shoes are designed for comfort, support, and durability. They offer a comfortable fit and provide good traction with their soft cushion feel at every step.
            </div>
            <div className="product-display-right-size">
                <h2>Select Size</h2>
                <div className="product-display-right-size">
                    <div>S</div>
                     <div>M</div>
                      <div>L</div>
                    
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="product-display-right-category"><span>Category :</span>Puma , Sneakers</p>

            </div>


        </div>

      
    </div>
  )
}

export default ProductDisplay
