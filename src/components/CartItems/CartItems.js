import React, { useContext } from 'react';
import "./cartItem.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/remove_icon.jpg";

const CartItems = () => {
    const {getTotalCartAmount,all_products, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cart-items'>
            <div className='cart-items-format-min'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cart-items-format'>
                                <img src={e.image} alt='' className='cart-icon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.price}</p>
                                <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                                <p>{e.price * cartItems[e.id]}</p> {/* total price of each product in cart */}
                                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt='' />
                            </div>
                            <hr />
                        </div>
                    );
                }
                    return null;
                
            })}
            <div className='cart-items-down'>
                <div className='cart-items-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cart-items-total-item'>
                            <p>Subtotal</p>
                            <p>${0}</p>
                        </div>
                        <hr />
                        <div className='cart-items-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cart-items-total-item'>
                            <h3>Total</h3>
                            <h3>${0}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cart-items-promocode'>
                    <p>If you have a promo code, Enter it here  </p>
                    <div className='cart-items-promobox'>
                        <input type='text' placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CartItems;
