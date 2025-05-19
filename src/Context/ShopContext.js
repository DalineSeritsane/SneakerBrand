import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_products";
import all_products from "../components/Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
        let cart = {};
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
            
        }
        return cart;
    }


const ShopContextProvider = (props) => {
     const [cartItems,setCartItem] = useState(getDefaultCart());
    

    const addToCart = (itemId) =>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   
   const removeFromCart = (itemId) =>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
console.log(cartItems);




    const contextValue = {all_products,cartItems,addToCart,removeFromCart};


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider