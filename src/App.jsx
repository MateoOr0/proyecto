
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Importa tu archivo CSS global aquí
import Home from './components/Home/home';
import Logigreg from './components/Logreg/Logigreg';
import Carrito from './components/Carrito/Carrito';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/logreg" element={<Logigreg cart={cart} setCart={setCart} />} />
        <Route path="/carrito" element={<Carrito cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));