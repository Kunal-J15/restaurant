import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props)=>{
    const [items,updateItems] = useState([]);
    const addItemHandler = (item)=>{
        updateItems(st=>{
            const idx = st.findIndex(e=>e.id===item.id)
            if(idx===-1) return [...st,item];
            st[idx].amount += item.amount;
            return [...st];
        });
    };
    const removeItemHandler = (id,val)=>{
        updateItems(st=>{
            const idx = st.findIndex(e=>e.id===id)
            if(idx===-1) return ;
            st[idx].amount += val;
            if ( st[idx].amount<=0) {
                return st.filter(e=>e.id!==id);
            }
            return [...st];
        });
    }
    const context = {
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler, 
    }
    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;