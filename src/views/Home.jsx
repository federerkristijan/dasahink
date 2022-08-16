import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="home">
      <div className="card">
        <div className="img">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5972489ff7e0ab52f5a63107/1584001616265-906OPLNYWFUPJSTCP7PB/finished+2.jpg?format=750w"
            alt="home pic"
          />
        </div>
        <div className="text">
          <div className="card-title" id="cardTitle">
            <h1>Title</h1>
          </div>
          <div className="description" id="cardDescription">Description</div>
        </div>
      </div>
      <div className="subscribe">
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
      <div className="insta">
        <div className="insta-title">
          <h3>my Insta stories is where its all at. join join me there</h3>
        </div>
        <div className="insta-pics">Pics come here</div>
      </div>
    </div>
  );
};

export default Home;
