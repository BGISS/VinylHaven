import { useState } from "react";
import ItemSummaryPage from "./ItemSummaryPage";
import './CheckoutStepper.css'
import CardInformationForm from "./CardInformationForm";
import SummaryPage from "./SummaryPage";
import Toast from "./Toast";

 function CheckoutStepper(){
    const [step,setStep]= useState(1);
    const  [name, setName]= useState("");
    const [email,setEmail]= useState("");
    const [address, setAddress]= useState(""); 
    const [show,setShow]= useState(false);   
    const nextStep =()=>{
        setStep((prev)=> prev+1)
        if(step===2){
            setShow(true);
            setTimeout(() => setShowToast(false), 2000);
        }
    };
    const previouStep=() => setStep((prev)=>prev-1);

    return(
        <>
        <div id="stepper-container">
            <div className="step-indicator">
            <div className={step === 1 ? "active-step" : step > 1 ? "completed-step" : ""}>1 <span>Cart</span></div>
            <div className={step === 2 ? "active-step" : step > 2 ? "completed-step" : ""}>2 <span>Payment</span></div>
            <div className={step === 3 ? "active-step" : ""}>3 <span>Summary</span></div>
            </div>
        <div id="stepper-content">
            {step===1 && <ItemSummaryPage setStep={nextStep}/>}
            {step===2 && <CardInformationForm setName={setName} setEmail={setEmail} setAddress={setAddress}prevStep={previouStep} nextStep={nextStep}/>}
            {step===3 && <SummaryPage name={name} email={email} address={address}/>}
        </div>
        </div>
        <Toast main={"Payment Received successfully!"} sub={"Thank you for shopping with vinylHaven"} show={show} setShow={setShow}/>
        </>
    )

 }
 export default CheckoutStepper