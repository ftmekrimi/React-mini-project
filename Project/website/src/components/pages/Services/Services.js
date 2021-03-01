import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjOne } from './Data';
import Pricing from "../Pricing";

function Home() {
  return (
    <>

    <Pricing />
	  <HeroSection {...homeObjOne} />   
    </>
  );
}

export default Home;