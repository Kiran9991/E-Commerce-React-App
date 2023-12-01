import React, { useState } from 'react';

import Header from './components/Header/Header';
import Products from './components/Product/Products';
import ModalCart from './components/UI/Modal';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const onClose = () => {
    setShowCart(false);
  }

  const show = () => {
    setShowCart(true);
  }

  return (
    <CartProvider>
      <ModalCart show={showCart} onHide={onClose}/>
      <Header onClick={show}/>
      <Products/>
    </CartProvider>
  );
}

export default App;
