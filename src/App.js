import React, {Fragment, useState} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showHandlerShown=  ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose= {hideCartHandler}/>}
      <Header onShowCart = {showHandlerShown}/>
      <main>
        <Meals/> 
      </main>
    </CartProvider>
  );
}

export default App;
