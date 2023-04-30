import CartIcon from './Cart/CartIcon';
import './CartHeaderButton.css';

const CartHeaderButton = (props) => {
  return (
    <button className="button" onClick={props.cartClicked}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>3</span>
    </button>
  );
};

export default CartHeaderButton;