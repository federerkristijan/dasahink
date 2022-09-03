import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Blog from "./Blog";

const Domination = () => {
  return (
    <div className="domination">
      <div className="domination-cover-image">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5972489ff7e0ab52f5a63107/1584178415189-CF2R4FXLYH3C1XI2NR30/final-0434+crop.jpeg?format=750w"
          alt="cover-pic"
        />
        <div className="subscribe-title">
          <h1>Subscripe to my Kink mailing list</h1>
          <br />
          <p>if you want to get informed about talks, writings, and events!</p>
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
      <div className="domination-card">
        <div className="domination-card-image"><img src={require("../assets/images/dom/dom1.jpg")} alt="" /></div>
        <div className="domination-card-text">
          <div className="domination-card-description">
            <p>Descprition comes here</p>
          </div>
        </div>
      </div>
      <div className="domination-card">
        <div className="domination-card-image"><img src={require("../assets/images/dom/dom2.jpeg")} alt="" /></div>
        <div className="domination-card-text">
          <div className="domination-card-description">
            <p>Descprition comes here</p>
          </div>
        </div>
      </div>
      <div className="domination-card">
        <div className="domination-card-image"><img src={require("../assets/images/dom/dom3.jpg")} alt="" /></div>
        <div className="domination-card-text">
          <div className="domination-card-description">
            <p>Descprition comes here</p>
          </div>
        </div>
      </div>
      <div className="bdsm">
        <div className="bdsm-title">
          <h3>Check out my fun BDSM Studio tour in Berlin!!</h3>
          <a href="https://www.airbnb.com/experiences/530915">
            <h5>View On AirbnbExplore the world of Kink with a pro</h5>
          </a>
        </div>
        <a href="blog">Check out more over here in my blog</a>
      </div>
    </div>
  );
};

export default Domination;
