import React, { useState } from 'react';

import Header from './components/Header/Header';
import Products from './components/Product/Products';
import ModalCart from './components/UI/Modal';

function App() {
  const [showCart, setShowCart] = useState(false);

  const onClose = () => {
    setShowCart(false);
  }

  const show = () => {
    setShowCart(true);
  }

  return (
    <div>
      <ModalCart show={showCart} onHide={onClose}/>
      <Header onClick={show}/>
      <Products/>
    </div>
  );
}

export default App;
