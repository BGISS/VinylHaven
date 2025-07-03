import { Form,Button, Container} from "react-bootstrap";
import { useState } from "react";
import "./CardInformationForm.css"

function CardInformationForm({prevStep, nextStep,setName,setEmail,setAdress}){
    const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    cardNumber: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim() || formData.fullName.trim().length<5) newErrors.fullName = "Full name should be more than 5 characters";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.email.includes("@")) newErrors.email = "Email must be valid";
    if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = "Card number must be exactly 16 digits without spaces";
    if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3 or 4 digits";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
   e.preventDefault();
   const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
      setAdress(formData.address);
      setEmail(formData.email);
      setName(formData.fullName);
      nextStep();
    }
    
  };

  return (
    <>
    <Container style={{ maxWidth: "600px", marginTop: "2rem" }}>
      <h3>Checkout</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            isInvalid={!!errors.fullName}
            required
          />
           <Form.Control.Feedback type="invalid">
            {errors.fullName}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="address" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={formData.address}
            onChange={handleChange}
             isInvalid={!!errors.address}
            required
          />
            <Form.Control.Feedback type="invalid">
            {errors.address}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
             isInvalid={!!errors.email}
            required
          />
            <Form.Control.Feedback type="invalid">
            {errors.email}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="cardNumber" className="mb-3">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="1234 5678 9012 3456"
            name="cardNumber"
            value={formData.cardNumber}
             isInvalid={!!errors.cardNumber}
            onChange={handleChange}
            required
          />
            <Form.Control.Feedback type="invalid">
            {errors.cardNumber}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="cvv" className="mb-3">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type="password"
            placeholder="123"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
             isInvalid={!!errors.cvv}
            required
          />
            <Form.Control.Feedback type="invalid">
            {errors.cvv}
            </Form.Control.Feedback>
        </Form.Group>
        <div id="form-buttons">
         <Button variant="dark" onClick={()=>prevStep()}>
            Go back
        </Button>
        <Button variant="dark" type="submit">
          Submit Payment
        </Button>
       </div>
      </Form>
    </Container>
    
    </>
  );
}

export default CardInformationForm;