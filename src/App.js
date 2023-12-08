import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <CartProvider>
          <ModalCart show={showCart} onHide={onClose} />
          <Header onClick={show} />
        </CartProvider>
      ),
      children: [
        {
          path: "/products",
          element: (
            <Products/>
          ),
        },
        { path: "/about", element: <AboutUs /> },
        { path: '/', element: <Home/> },
        { path: '/contact-us', element: <ContactUs/>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
