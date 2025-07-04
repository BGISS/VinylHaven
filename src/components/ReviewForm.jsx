
import { useState } from "react";
import { Form, Button, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router";

function ReviewForm() {
  const navigate= useNavigate();
  const [review, setReview] = useState({
    name: "",
    rating: "",
    comment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", review);
    alert("Thanks for your feedback!");
    setReview({ name: "", rating: "", comment: "" });
    navigate("/")
  };
   const handleClose = () => {
   setReview({ name: "", rating: "", comment: "" }); 
    navigate("/");
  };

  return (
    <Container style={{ maxWidth: "500px", marginTop: "2rem" }}>
     
      <h4>Please leave us a review</h4>
      <Form onSubmit={handleSubmit}>
        <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="close-tooltip">Close this form</Tooltip>}
      >
         <Button  
        onClick={handleClose} 
        style={{width:"20px", borderRadius:"40%", position:"absolute",top:"30%", right:"34%"}}
      >  &times;</Button>
      </OverlayTrigger>
        <Form.Group controlId="reviewRating" className="mb-3">
          <Form.Label>Rate your website experience</Form.Label>
          <Form.Select
            name="rating"
            value={review.rating}
            onChange={handleChange}
            required
          >
            <option value="">Here are your choices</option>
            <option>1 - The experience was not satisfactory</option>
            <option>2 - The website needs a lot of work</option>
            <option>3 - The website is satisfactory but needs more work </option>
            <option>4 - The website is great but it is still missing a little something</option>
            <option>5 - I loved everything about the website</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="reviewComment" className="mb-3">
          <Form.Label>Your comments also matter to us</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            placeholder="We take into consideration every review, don't hesitate to tell us what you really think!"
            value={review.comment}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit Review
        </Button>
      </Form>
    </Container>
  );
}

export default ReviewForm;