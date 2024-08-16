import React from 'react';
import { Navbar } from './components/Navbar';
import { ImagesSliderDemo } from '../pages/home'; // Import the ImagesSliderDemo component
import { AppleCardsCarouselDemo } from '../pages/imageCards'; // Import the AppleCardsCarouselDemo component

export default function Home() {
  return (
    <main>
      <Navbar />
      <ImagesSliderDemo /> 
      <AppleCardsCarouselDemo />
    </main>
  );
}
