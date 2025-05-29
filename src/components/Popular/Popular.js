import React, { useEffect, useState } from 'react';
import './popular.css';
import Item from '../Item/Item';


const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/popularinpuma').then((response)=>response.json()).then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className='popular'>
      <h1>Latest Fresh Sneakers</h1>
      <hr />
      <div className='popular-item'>
        {popularProducts.map((item, i) => {
          return (
            <div className="popular-card" key={i}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: R{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
