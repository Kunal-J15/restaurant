import CartIcon from './Cart/CartIcon';
import './CartHeaderButton.css';
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
const CartHeaderButton = (props) => {
    const cartctx = useContext(CartContext);
    const sumItems = cartctx.items.reduce((acc,item)=>acc+item.amount,0)
  return (
    <button className="button" onClick={props.cartClicked}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{sumItems}</span>
    </button>
  );
};

export default CartHeaderButton;