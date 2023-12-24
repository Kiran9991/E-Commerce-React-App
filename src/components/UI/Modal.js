import React, { Fragment } from "react";

import { Modal, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";

const ModalCart = (props) => {
  return (
    <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">CART</Modal.Title>
        </Modal.Header>
        <Cart />
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="success">PURCHASE</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalCart;
