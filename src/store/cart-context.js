import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const convertEmail = (email) => {
  let newEmail = "";
  for (let i = 0; i < email.length; i++) {
    if (email[i] !== "@" && email[i] !== ".") email += email[i];
  }
  return newEmail;
};

export const CartContextProvider = async (props) => {
  const userEmail = localStorage.getItem("email");
  let email = convertEmail(userEmail);
  // try {
  //   const res = await fetch(`https://crudcrud.com/api/652d8df35708449ebeddef9d61ba6374/cart${email}`);
  //   const data = await res.json();
  //   console.log('data',data);
  // }catch(err) {
  //   console.log(err);
  // }
  const [items, updateItem] = useState([]);

  const addItemToCartHandler = async (item) => {
    updateItem([...items, item]);

    try {
      const res = await fetch(
        `https://crudcrud.com/api/652d8df35708449ebeddef9d61ba6374/cart${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      const data = await res.json();
      console.log('data',data);
    } catch (err) {
      console.log(err);
    }
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

export default CartContext;
