import { Card, Badge } from "react-bootstrap";
import { useCart } from "./CartProvider"

function PromotionalVinylCard({ Vinyl}) {
    const discountPercentage = 20;
    const discountedPrice = Math.round(Vinyl.price * (1 - discountPercentage / 100));
    const { addToCart,cart,removeFromCart } = useCart(); 
  const cartItem = cart.find(item => item.id === Vinyl.id);
  const numItems = cartItem ? cartItem.quantity : 0;
  const handleAddToCart = () => {
    const newVinyl = { ...Vinyl, price: discountedPrice };
    addToCart(newVinyl);
  };
  const handleRemoveFromCart=()=>{
    removeFromCart(Vinyl);
  }
    return (
        <>
         <div className="vinyl-card-wrapper">
            <div className="vinyl-card">
                <Badge bg="danger" style={{ position: "absolute", top: "10px", right: "10px", fontSize: "0.9rem" }}>
                            {discountPercentage}% OFF
                        </Badge>
    <div className="vinyl-card-front">
      <Card>
        <Card.Body>
          <div className="vinyl-info">
            <Card.Title>{Vinyl.artist}</Card.Title>
            <Card.Text>{Vinyl.album}</Card.Text>
            <Card.Text>Genre: {Vinyl.category}</Card.Text>
           <Card.Text>
                <span style={{ textDecoration: "line-through", color: "gray", marginRight: "10px" }}>
                    ${Vinyl.price}
                </span>
                 <span style={{ color: "green", fontWeight: "bold" }}>
                        ${discountedPrice}
                </span>
                 </Card.Text>
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
    );
}

export default PromotionalVinylCard;