import React from 'react'
import Hero from "../components/Hero/Hero";
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import Collections from '../components/Collections/Collections';
import Newsletter from '../components/NewsLetter/Newsletter';
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
       <Hero/>
      <Offers />
      <Popular />
      <Collections />
      <Newsletter />
      <Footer /> 
    </div>
  )
}

export default Home
