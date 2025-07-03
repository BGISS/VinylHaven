import CartItemContainer from "./CartItemContainer";
import { useCart } from "./CartProvider"
import "./ItemSummaryPage.css"

function ItemSummaryPage({setStep}){
    const { cart } = useCart();
    const cartItems = [...new Set(cart)];
    const itemCost = cart.reduce((total, vinyl) => total + vinyl.price, 0)
    const shipping= 15;

    return (
        <div id="summary-cont">
            <div id="cart-item">
                <h1 style={{borderBottom:"2px solid black"}}>Items</h1>
                {(cartItems || []).map((item,index) => (
                    <CartItemContainer key={index} vinyl={item} />
                ))}
                {cart.length===0 &&
                <div>
                    <p>No items in your cart</p>
                    </div>}
            </div>
            {cart.length>0 &&<div id="cost-summary">
                <h1 style={{borderBottom:"2px solid black"}}>Summary</h1>
                <h3>Item cost: {itemCost}</h3>
                <h3>Shipping: {shipping}</h3>
                <h3>Total Cost: {itemCost+shipping}</h3>
                <button onClick={() => setStep()} disabled={cart.length===0} className={cart.length>0?"":"disabled"}>Proceed to checkout</button>
            </div>}
        </div>
    )
}

export default ItemSummaryPage