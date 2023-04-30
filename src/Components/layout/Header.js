import React from "react";
import "./Header.css"
import img from "./meals.jpg"
import CartHeaderButton from "./CartHeaderButton";
const Headers = (props)=>{
    
    return <>
    <div>
        <header className="header-head">
            <h1>React Meals</h1>
            <CartHeaderButton cartClicked = {props.cartClicked}></CartHeaderButton>
        </header>
        <div className="main-image">
        <img src={img}></img>
        </div>
        </div>
    </>
}

export default Headers;