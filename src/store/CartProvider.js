import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItem] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItem([...items, item]);
  };

  const removeItemFromCartHandler = (id) => {
    updateItem((prev) => {
      const updatedPrevItems = prev.filter((item) => item.id !== id);
      return updatedPrevItems;
    });
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
