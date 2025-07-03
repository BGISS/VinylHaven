import { Card } from "react-bootstrap";
import { useCart } from "./CartProvider"
import "./ImageContainer.css"

function ImageContainer({Vinyl}){
   const { addToCart,cart,removeFromCart } = useCart(); 
  const cartItem = cart.find(item => item.id === Vinyl.id);
  const numItems = cartItem ? cartItem.quantity : 0;
  const handleAddToCart = () => {
    addToCart(Vinyl);
  };
  const handleRemoveFromCart=()=>{
    removeFromCart(Vinyl);
  }
    return(
        <>
    <div className="vinyl-card-wrapper">
  <div className="vinyl-card">
    <div className="vinyl-card-front">
      <Card>
        <Card.Body>
          <div className="vinyl-info">
            <Card.Title>{Vinyl.artist}</Card.Title>
            <Card.Text>{Vinyl.album}</Card.Text>
            <Card.Text>Genre: {Vinyl.category}</Card.Text>
            <Card.Text>${Vinyl.price}</Card.Text>
          </div>
         
        </Card.Body>
      </Card>
    </div>

    <div className="vinyl-card-back">
      <Card>
        <Card.Img loading="lazy" variant="top" src={Vinyl.image} className="vinyl-img" />
      </Card>
    </div>
    
  </div>
   {numItems=== 0? <button onClick={handleAddToCart} className="flip-add-button">Add to cart</button>
   :
   <div id="plus-minus">
   <button onClick={handleRemoveFromCart}>-</button>
   <p>{numItems}</p>
   <button onClick={handleAddToCart}>+</button>
   </div>
   }
</div>
        
        </>
    )
}
export default ImageContainer;