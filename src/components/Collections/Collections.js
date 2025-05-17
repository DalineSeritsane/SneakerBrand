import React from 'react';
import './collections.css';
import new_collection from '../Assets/new_collection';
import Item from '../Item/Item'; 

const Collections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item, i) => (
          <div className="popular-card" key={i}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: R{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
