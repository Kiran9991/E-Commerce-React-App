import { Button } from "react-bootstrap";

import cart from './Cart.module.css';
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const { item } = props;
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = () => {
    cartCtx.addItem({...item, id:Math.random(), quantity: 1});
  }

  const removeItemFromCartHandler = () => {
    console.log(item.id)
    cartCtx.removeItem(item.id)
  }

  return (
    <div className={cart.row} key={item.id}>
      <span className={`${cart.item} ${cart.column}`}>
        <img className={cart.img} src={item.imageUrl} alt="img" />
        <span>{item.title}</span>
      </span>
      <span className={`${cart.price} ${cart.column}`}>{item.price}</span>
      <span className={`${cart.quantity} ${cart.column}`}>
        <h5 className={cart.h5Margin}>x{item.quantity}</h5>
        <Button variant="success" className={cart.addButton} onClick={addItemToCartHandler}>ADD</Button>
        <Button variant="danger" className={cart.removeButton} onClick={removeItemFromCartHandler}>REMOVE</Button>
      </span>
    </div>
  );
};

export default CartItem;
