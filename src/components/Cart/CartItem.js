import { Button } from "react-bootstrap";

import classes from './Cart.module.css';

const CartItem = (props) => {
  return (
    <div className={classes.row} key={props.index}>
      <span className={classes.item+' '+classes.column}>
        <img className={classes.img} src={props.item.imageUrl} alt="img" />
        <span>{props.item.title}</span>
      </span>
      <span className={classes.price+' '+classes.column}>{props.item.price}</span>
      <span className={classes.quantity+' '+classes.column}>
        <input type="text" value={`x${props.item.quantity}`} />
        <Button variant="danger">REMOVE</Button>
      </span>
    </div>
  );
};

export default CartItem;
