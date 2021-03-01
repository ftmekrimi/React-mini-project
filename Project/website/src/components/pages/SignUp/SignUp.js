import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjOne,  homeObjThree } from './Data';
import Pricing from '../Pricing';

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;