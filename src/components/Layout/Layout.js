import { useState } from "react";
import ModalCart from "../UI/Modal";
import Header from "../Header/Header";

const Layout = (props) => {
  const [showCart, setShowCart] = useState(false);

  const onClose = () => {
    setShowCart(false);
  };

  const show = () => {
    setShowCart(true);
  };

  return (
    <>
      <ModalCart show={showCart} onHide={onClose} />
      <Header onClick={show} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
