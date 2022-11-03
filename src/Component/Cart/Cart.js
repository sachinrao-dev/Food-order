import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart = (props)=>{
    const cartItems =<ul className={classes['cart-items']}>
        { [{id:'c1', name:'sushi', amount:'2', price: 12.33}].map(item => <li>
        {item.name}
    </li>) }</ul>


    return<Modal onClose= {props.onClose}>
    {cartItems}
    <div>
        <span className={classes.total}>Total Amount</span>
        <span>35.53</span>
    </div>
    <div className={classes.action}>
        <button className={classes.total} onClose={props.onClose}>Close</button>
        <button className={classes.total}>Order</button>
    
    </div>


</Modal>

}
export default Cart;