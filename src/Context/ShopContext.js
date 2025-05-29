import React, { createContext, useEffect, useState } from "react";
import all_product from "../components/Assets/all_products";
import all_products from "../components/Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [all_product,setAll_Products] = useState([]);
    const [cartItems, setCartItem] = useState(getDefaultCart());


    useEffect(()=>{
    fetch('http://localhost:5000/allproducts').then((response)=>response.json()).then((data)=>setAll_Products(data))

    if(localStorage.getItem('auth-token')){
    fetch('http://localhost:5000/getcart',{
    method:'POST',
    headers:{
    Accept:'application/form-data',
    'auth-token':`${localStorage.getItem('auth-token')}`,
    },
    body:"",
    }).then((response)=>response.json()).then((data)=>setCartItem(data));
    }
    },[]);

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        // console.log(cartItems);
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        // console.log(cartItems);
    };

    const getTotalCartAmount = ()=> {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
            
        }
         return totalAmount;
    };

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)

                {
                    totalItem += cartItems[item];
                }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
