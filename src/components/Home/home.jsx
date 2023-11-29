import React from 'react';
import Head from '../Head/Head';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Maine from './Maine';

const Home = ({ addToCart }) => {
  return (
    <div>
      <Head />
      <Header />
      <Maine addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default Home;
