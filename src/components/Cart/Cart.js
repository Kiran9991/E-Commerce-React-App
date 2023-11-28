import { Modal } from "react-bootstrap";

import cart from './Cart.module.css';
import CartItem from "./CartItem";

const Cart = () => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return (
      <Modal.Body className="grid-example">
        <div className={cart.row+' '+cart.header}>
          <span className={`${cart.item} ${cart.column}`}>ITEM</span>
          <span className={`${cart.price} ${cart.column}`}>PRICE</span>
          <span className={`${cart.quantity} ${cart.column}`}>QUANTITY</span>
        </div>
        {cartElements.map((item, index) => (
          <CartItem item={item} index={index}/>
        ))}
        <div className={cart.total}>
          <span>
            <span className={cart["total-title"]}>
              <strong>Total</strong>
            </span>
            $ <span>39.00</span>
          </span>
        </div>
      </Modal.Body>
  );
};

export default Cart
