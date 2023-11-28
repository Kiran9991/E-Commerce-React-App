import { Button } from "react-bootstrap";

import cart from './Cart.module.css';

const CartItem = (props) => {
  return (
    <div className={cart.row} key={props.index}>
      <span className={`${cart.item} ${cart.column}`}>
        <img className={cart.img} src={props.item.imageUrl} alt="img" />
        <span>{props.item.title}</span>
      </span>
      <span className={`${cart.price} ${cart.column}`}>{props.item.price}</span>
      <span className={`${cart.quantity} ${cart.column}`}>
        <input type="text" value={`x${props.item.quantity}`} />
        <Button variant="success" className={cart.addButton}>ADD</Button>
        <Button variant="danger" className={cart.removeButton}>REMOVE</Button>
      </span>
    </div>
  );
};

export default CartItem;
