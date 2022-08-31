import React from "react";
import { artImg } from "./data";

const Art = () => {
  return (
    <div className="art">
      <div className="art-card">
        <div className="art-title">
          <h4>
            Here are some photography and sculptural projects I did in the last
            years. I usually create a concept to shoot, make the designs, invite
            some muses to participate or model myself. I work with exceptional
            photographers such as Tobi Jall.
          </h4>
        </div>
        <div className="art-image">
          {artImg.image.map(({id, img, height, width, description}) => (
              <span key={id}>
                <img
                  className="images"
                  src={img}
                  alt={id}
                  height={height}
                  width={width}
                />
                <p>{description}</p>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Art;
