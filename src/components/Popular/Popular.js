import React from 'react';
import './popular.css';
import data_product from '../Assets/data';


const Popular = () => {
  return (
    <div className='popular'>
      <h1>Latest Fresh Sneakers</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item, i) => {
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
