import { useParams, Link } from "react-router-dom";
import { Fragment } from "react";
import "./ProductDetails.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const ProductDetails = () => {
  const params = useParams();
  const itemCtx = useContext(CartContext);

  const singleProduct = itemCtx.items.find(
    (item) => item.id === params.productId
  );

  const submitHandler = () => {
    itemCtx.addItem({ id: Math.random(), ...singleProduct });
  };

  return (
    <Fragment>
      <div className="ap">
        <div className="details">
          <div className="big-img">
            <img src={singleProduct.imageUrl} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{singleProduct.title}</h2>
              <span>${singleProduct.price}</span>
            </div>

            <p>description</p>
            <p>content</p>

            <div className="thumb"></div>
            <button className="cart" onClick={submitHandler}>
              Add to cart
            </button>
            <Link to="/products">
              <button className="back">Back to Products page</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
