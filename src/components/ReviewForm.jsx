
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

function ReviewForm() {
  const naviagte= useNavigate();
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
    naviagte("/")
  };

  return (
    <Container style={{ maxWidth: "500px", marginTop: "2rem" }}>
      <h4>Leave a Review</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="reviewName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your name"
            value={review.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="reviewRating" className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            name="rating"
            value={review.rating}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option>1 - Poor</option>
            <option>2 - Fair</option>
            <option>3 - Good</option>
            <option>4 - Very Good</option>
            <option>5 - Excellent</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="reviewComment" className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            placeholder="Write your review..."
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