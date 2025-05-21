import React, { useContext, useRef, useState } from 'react';
import './navbar.css';
import logo from '../Assets/logo.jpg';
import cartIcon from '../Assets/cart.jpg';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown.jpg';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  // const cartItemCount = 0;
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');


  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Sneaker Fit Logo" />
        <span className="brand-name">SNEAKER FiT</span>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt=''/>

      <ul ref={menuRef} className="navbar-menu">
        <li onClick={() => { setMenu("home") }}>
          <Link to='/'>Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("nike") }}>
          <Link to='/nike'>Nike</Link>
          {menu === "nike" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("puma") }}>
          <Link to='/puma'>Puma</Link>
          {menu === "puma" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("valentino") }}>
          <Link to='/valentino'>Valentino</Link>
          {menu === "valentino" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login-signup'><button>Login</button></Link>
        <Link to='/cart'><img src={cartIcon} alt="Sneaker Fit" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
