import React, { useState } from 'react';
import './navbar.css';
import logo from '../Assets/logo.jpg';
import cartIcon from '../Assets/cart.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  // const cartItemCount = 0; 

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Sneaker Fit Logo" />
        <span className="brand-name">SNEAKER FiT</span>
      </div>

      <ul className="navbar-menu">
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
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cartIcon} alt="Sneaker Fit" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </nav>
  );
};

export default Navbar;
