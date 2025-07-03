import { Card } from "react-bootstrap";
import { useCart } from "./CartProvider"
import "./CartItemContainer.css"

function CartItemContainer({vinyl}){
    const {removeFromCart}= useCart();
    function handleRemoveFromCart(){
        removeFromCart(vinyl);
    }
    return(
        <>
              <Card id="cart-card">
                <Card.Body>
                    <Card.Title>
                        {vinyl.artist}
                    </Card.Title>
                    <Card.Text>
                        {vinyl.album}
                    </Card.Text>
                    <Card.Text>
                        Genre: {vinyl.category}
                    </Card.Text>
                    <div id="quantity">
      <span><strong>Price:</strong> ${vinyl.price}</span>
      <span id="quant">
        Qty: {vinyl.quantity}
      </span>
    </div>
                    <button onClick={handleRemoveFromCart}>Remove from cart</button>
                </Card.Body>
            </Card>
        </>
    )
}
export default CartItemContainer;