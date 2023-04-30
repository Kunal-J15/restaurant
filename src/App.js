
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/layout/Cart/Cart";
import Headers from "./Components/layout/Header";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";


function App() {
  const [cartClicked,toggleCartClicked] = useState(false);

  const changeCartClicked= () =>{
    toggleCartClicked(st=>!st);
  }
  
  return (
    <CartProvider>
    <Headers cartClicked = {changeCartClicked}></Headers>
    {cartClicked && <Cart cartClicked = {changeCartClicked}></Cart>}  
    <Meals/>
    </CartProvider>
  );
}

export default App;

