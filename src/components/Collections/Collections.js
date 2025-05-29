import React, { useEffect, useState } from 'react';
import './collections.css';
import new_collection from '../Assets/new_collection';
import Item from '../Item/Item'; 

const Collections = () => {

  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/collections').then((response)=>response.json()).then((data)=>setCollection(data));
  },[])
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item, i) => (
          <div className="popular-card" key={i} id={item.id}>
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
