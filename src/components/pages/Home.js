import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

import Aboutus1 from '../Aboutus1';
import Pricing from '../Pricing'
import Who from '../Who1'

function Home() {
  return (
    <>
      <HeroSection />
      <Pricing/>
     
      <Aboutus1/>
      <Cards />
      <Who/>

      <Footer />
    </>
  );
}

export default Home;
