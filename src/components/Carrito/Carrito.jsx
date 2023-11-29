import React from 'react';
import Head from '../Head/Head';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Carr from './Carr';

const Carrito = ({ cart, setCart }) => {
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: newQuantity }
        : product
    ).filter((product) => product.quantity > 0);

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <Head />
      <Header />
      <Carr cart={cart} updateQuantity={updateQuantity} clearCart={clearCart} />
      <Footer />
    </div>
  );
};

export default Carrito;