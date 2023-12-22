import React, { useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Products from "./components/Product/Products";
import { CartContextProvider } from "./store/cart-context";
import AboutUs from "./components/About/About";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/Layout";

function App() {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn) {
    setTimeout(() => {
      localStorage.removeItem("token");
      console.log("logout");
    }, 10000);
  }

  return (
    <CartContextProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            {authCtx.isLoggedIn && <Products />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/login">
              <Login />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/products/:productId" exact>
              <ProductDetails />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </CartContextProvider>
  );
}

export default App;
