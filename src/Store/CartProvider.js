import {useReducer} from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items:[],
  totalAmount:0
}

const cartReducer = (state, action ) =>{
  if(action.type==='ADD'){
    const updateItems = state.items.concat(action.item);
    const updatesTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return{
      items: updateItems,
      totalAmount: updatesTotalAmount
    }
  }
  return defaultCartState
}

const CartProvider = (props)=>{
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item})

  };

  const removeItemFromHandler = id =>{
    dispatchCartAction({
      type: 'REMOVE',
      id: id
    })


  };

    const cartContext = {
        item: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler ,
        removeItem: removeItemFromHandler,
    }
    return<CartContext.Provider value={cartContext}>
    {props.children}
    </CartContext.Provider>

}
export default CartProvider;