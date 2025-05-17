import React from 'react'
import Hero from "../components/Hero/Hero";
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import Collections from '../components/Collections/Collections';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers />
      <Collections />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
