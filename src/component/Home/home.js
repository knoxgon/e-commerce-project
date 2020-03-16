import React from 'react'
import { HomePageWrapper } from './style'
import GenericSlideShow from '../GenericSlideShow';
import Product from '../Product';

const Home = () => {
  return (
    <HomePageWrapper>
      <GenericSlideShow></GenericSlideShow>
      <Product></Product>
    </HomePageWrapper>
  );
}

export default Home;
