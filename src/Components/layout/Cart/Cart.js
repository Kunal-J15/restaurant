import Modal from "./Modal";
import "./Cart.css"
import CartContext from "../../../Store/cart-context";
import { useContext } from "react";
import List from "../../UI/List";



const Cart = (props)=>{
    const ctx = useContext(CartContext);
    let total =0;
     const cartItems = <ul className='cart-items'>{ctx.items.map(item=>{
        total += parseFloat(item.price) * parseInt(item.amount);

        return <List key={item.id} {...item}></List>})}</ul>
        total = total.toFixed(2)
     return (
        <Modal>
            {cartItems}
            <div className="total">
                <span>Total Amount: </span>
                <span>{total}</span>
            </div>
            <div className="actions">
                
                <button className="button-alt" onClick={props.cartClicked}>Close</button>
                <button className="cart-button">Order</button>
                
            </div>
        </Modal>
     )
}
export default Cart;