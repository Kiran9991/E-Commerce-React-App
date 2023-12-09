import React, { useState } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Products from "./components/Product/Products";
import ModalCart from "./components/UI/Modal";
import CartProvider from "./store/CartProvider";
import AboutUs from "./components/About/About";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  const [showCart, setShowCart] = useState(false);

  const onClose = () => {
    setShowCart(false);
  };

  const show = () => {
    setShowCart(true);
  };

  return (
    <CartProvider>
      <ModalCart show={showCart} onHide={onClose} />
      <Header onClick={show} />
      <main>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
      </main>
    </CartProvider>
  );
}

export default App;
