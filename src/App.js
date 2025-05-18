import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Category from './pages/Category';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
 import nike_banner from './components/Assets/nike_banner.jpg';
 import puma_banner from './components/Assets/puma_banner.jpg';
 import valentino_banner from './components/Assets/valentino_banner.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nike" element={<Category banner={nike_banner} category="nike"   />} />
          <Route path="/puma" element={<Category banner={puma_banner} category="puma"  />} />
          <Route path="/valentino" element={<Category banner={valentino_banner} category="valentino"   />} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
