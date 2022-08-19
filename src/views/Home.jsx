import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="home">
      <div className="home-card">
        <div className="home-image">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5972489ff7e0ab52f5a63107/1584001616265-906OPLNYWFUPJSTCP7PB/finished+2.jpg?format=750w"
            alt="home pic"
          />
        </div>
        <div className="home-text">
          <div className="home-title">
            <h1>Title</h1>
          </div>
          <div className="home-description">Description</div>
        </div>
      </div>
      <div className="home-subscribe">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Subscribe to mailing list
          </Button>
        </Form>
      </div>
      <div className="home-insta">
        <div className="insta-title">
          <h3>my Insta stories is where its all at. join join me there</h3>
        </div>
        <div className="insta-pics">Pics come here</div>
      </div>
    </div>
  );
};

export default Home;
