import { Button } from "react-bootstrap";
import { useCart } from "./CartProvider"
import "./SummaryPage.css"
import { useState } from "react";
import ReviewForm from "./ReviewForm";

function SummaryPage({name,email,address}){
    const {cart,removeAllItems} = useCart();
    const [showForm, setShowForm]= useState(false);
    const numItems= cart.length;
    
    function handleHomeButton(){
        removeAllItems();
        setShowForm(true);
        
    }
    return(
        <>
        <div id="summ-page-cont">
            <h1>Summary</h1>
            <h3>Name: {name} </h3>
            <h3>Contact information: {email}</h3>
            <h3>Delivery information: {address}</h3>
            <h3>Number of items: {numItems}</h3>
            <Button onClick={handleHomeButton}>Home</Button>
        </div>
        {showForm && <div id="review"><ReviewForm /></div>}
        </>
    )
}
export default SummaryPage;