import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Domination = () => {
  return (
    <div className="domination">
      <div className="domination-cover-image">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5972489ff7e0ab52f5a63107/1584178415189-CF2R4FXLYH3C1XI2NR30/final-0434+crop.jpeg?format=750w"
          alt="cover-pic"
        />
      </div>
      <div className="subscribe">
        <div className="subscribe-title">
          <h3>Subscripe to my Kink mailing list</h3>
          <br />
          <p>if you want to get informed about talks, writings, and events!</p>
        </div>
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
        <div className="domination-card-image">image comes here</div>
        <div className="domination-card-text">
          <div className="domination-card-title">
            <h5>Title</h5>
          </div>
          <div className="domination-card-description">
            <p>Descprition comes here</p>
          </div>
        </div>
      </div>
      <div className="bdsm">
        <div className="bdsm-title">
          <h3>Check out my fun BDSM Studio tour in Berlin!!</h3>
          <a href="https://www.airbnb.com/experiences/530915?s=66&shared_item_type=2&virality_entry_point=2&sharer_id=49339993&unique_share_id=4062ceca-b5ee-47f9-9893-5689ffe42f11&source=embed_widget">
            <h5>View On AirbnbExplore the world of Kink with a pro</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Domination;
