import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Products from "./components/Product/Products";
import ModalCart from "./components/UI/Modal";
import { CartContextProvider } from "./store/cart-context";
import AboutUs from "./components/About/About";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";

function App() {
  const [showCart, setShowCart] = useState(false);

  const onClose = () => {
    setShowCart(false);
  };

  const show = () => {
    setShowCart(true);
  };

  return (
    <CartContextProvider>
      <ModalCart show={showCart} onHide={onClose} />
      <Header onClick={show} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path="/products/:productId" exact>
            <ProductDetails/>
          </Route>
        </Switch>
      </main>
    </CartContextProvider>
  );
}

export default App;
