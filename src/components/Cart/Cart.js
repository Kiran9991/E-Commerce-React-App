import { Modal } from "react-bootstrap";

import cart from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const showUniqueItems = (items) => {
  const uniqueItems = [];
  const track = new Map();

  for (let i = 0; i < items.length; i++) {
    if (track.has(items[i].title)) {
      let idx = track.get(items[i].title);
      uniqueItems[idx] = {
        ...uniqueItems[idx],
        quantity: Number(uniqueItems[idx].quantity) + Number(items[i].quantity),
      };
    } else {
      uniqueItems.push({ ...items[i] });
      track.set(items[i].title, uniqueItems.length - 1);
    }
  }
  return uniqueItems;
};

const Cart = () => {
  const cartCtx = useContext(CartContext);

  let total = 0;

  cartCtx.items.forEach((item) => (total += item.price));

  const uniqueItems = showUniqueItems(cartCtx.items);

  const content = <h2 className={cart.empty}>Your Cart is Empty!</h2>

  return (
    uniqueItems.length > 0 ? <Modal.Body className="grid-example">
      <div className={`${cart.row} ${cart.header}`}>
        <span className={`${cart.item} ${cart.column}`}>ITEM</span>
        <span className={`${cart.price} ${cart.column}`}>PRICE</span>
        <span className={`${cart.quantity} ${cart.column}`}>QUANTITY</span>
      </div>
      {uniqueItems.map((item, index) => (
        <CartItem item={item} index={index}/>
      ))}
      <div className={cart.total}>
        <span>
          <span className={cart["total-title"]}>
            <strong>Total</strong>
          </span>
          $ <strong>{total}</strong>
        </span>
      </div>
    </Modal.Body> : content
  );
};

export default Cart;
