import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const convertEmail = (email) => {
  let newEmail = "";
  if (email) {
    for (let i = 0; i < email.length; i++) {
      if (email[i] !== "@" && email[i] !== ".") newEmail += email[i];
    }
  }
  return newEmail;
};

const CartContextProvider = (props) => {
  const [items, updateItem] = useState([]);
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    async function fetchData() {
      try {
        const email = convertEmail(userEmail);
        const res = await fetch(
          `https://crudcrud.com/api/9bcc480321854e4788d84f97760ce16a/cart${email}`
        );
        const data = await res.json();
        updateItem([...data]);
        console.log('items loaded')
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [userEmail]);

  const addItemToCartHandler = async (item) => {
    const userEmail = localStorage.getItem("email");
    const email = convertEmail(userEmail);
    try {
      const res = await fetch(
        `https://crudcrud.com/api/9bcc480321854e4788d84f97760ce16a/cart${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      const data = await res.json();
      updateItem([...items, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const removeItemFromCartHandler = async (id) => {
    updateItem((prev) => {
      const updatedPrevItems = prev.filter((item) => item._id !== id);
      return updatedPrevItems;
    });
    try {
      const userEmail = localStorage.getItem("email");
      const email = convertEmail(userEmail);
      await fetch(
        `https://crudcrud.com/api/9bcc480321854e4788d84f97760ce16a/cart${email}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
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

export { CartContext as default, CartContextProvider };
