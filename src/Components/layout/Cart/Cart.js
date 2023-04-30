import Modal from "./Modal";
import "./Cart.css"

const Cart = (props)=>{
     const cartItems = <ul className='cart-items'>{[{id:"c1",name:"Sushi",amount:2,price:13}].map(item=><li key={item.id} >{item.name}</li>)}</ul>

     return (
        <Modal>
            {cartItems}
            <div className="total">
                <span>Total Amount: </span>
                <span>35.66</span>
            </div>
            <div className="actions">
                <button className="button-alt" onClick={props.cartClicked}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
     )
}
export default Cart;