import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import "./List.css"
const List = props=>{
    const ctx = useContext(CartContext);
    const handleIncr = ()=>{
        ctx.removeItem(props.id,1);
    } 
    const handleDecr = ()=>{
        ctx.removeItem(props.id,-1);
    } 
    return <li className="cart-item">
        <h4>{props.name}</h4>
        <div className="des">
        <span>{props.price}</span>
        <span>X {props.amount}</span>
        </div>

        <div className="action">
        <button onClick={handleDecr}>-</button>
        <button onClick={handleIncr}>+</button>
        </div>
    </li>
}

export default List;