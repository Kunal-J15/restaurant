
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/layout/Cart/Cart";
import Headers from "./Components/layout/Header";
import { useState } from "react";


function App() {
  const [cartClicked,toggleCartClicked] = useState(false);

  const changeCartClicked= () =>{
    toggleCartClicked(st=>!st);
  }
  return (
    <div>
    <Headers cartClicked = {changeCartClicked}></Headers>
    {cartClicked && <Cart cartClicked = {changeCartClicked}></Cart>}  
    <Meals/>

    </div>
  );
}

export default App;

