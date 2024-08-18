import React from 'react';
import { Navbar } from './components/Navbar';
import { ImagesSliderDemo } from '../pages/home'; // Import the ImagesSliderDemo component
import { AppleCardsCarouselDemo } from '../pages/imageCards';
import {FeaturesSectionDemo } from "../pages/Services";// Import the AppleCardsCarouselDemo component
import {SignupFormDemo} from "../pages/login";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SignupFormDemo/>
      <ImagesSliderDemo /> 
      <AppleCardsCarouselDemo />
      <FeaturesSectionDemo/>
    </main>
  );
}
