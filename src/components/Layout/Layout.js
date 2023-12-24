import { useState, Fragment } from "react";
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
    <Fragment>
      <ModalCart show={showCart} onHide={onClose} />
      <Header onClick={show} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
