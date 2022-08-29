import React from "react";
import art from "../assets/images/art.json";

const Art = () => {
  return (
    <div className="art">
      <div className="art-card">
        <div className="art-title">
          <h2>
            Here are some photography and sculptural projects I did in the last
            years. I usually create a concept to shoot, make the designs, invite
            some muses to participate or model myself. I work with exceptional
            photographers such as Tobi Jall.
          </h2>
        </div>
        <div className="image">
          {art.map((id) => {
            return (
              <span key={id}>
                <img src={art.index} key={art.id} alt="art-images" />
                <p>{art.description}</p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Art;
