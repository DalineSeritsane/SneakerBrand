import React, { useContext } from 'react'
import "../CSS/category.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../components/Assets/dropdown.jpg"
import Item from "../components/Item/Item";

const Category = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className="shop-category-banner" src={props.banner} alt='' />
      <div className="category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='category-products'>
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id || i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default Category;
