import React from "react";
import { artImg, artDuo, artTrio } from "./data";

const Art = () => {
  return (
    <div className="art">
      <div className="art-card">
        <div className="art-title">
          <span>
            Here are some photography and sculptural projects I did in the last
            years. I usually create a concept to shoot, make the designs, invite
            some muses to participate or model myself. I work with exceptional
            photographers such as Tobi Jall.
          </span>
        </div>
        <div className="art-image">
          {artImg.image.map(({ id, img, height, width, description }) => (
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
        <div className="art-image">
          <div className="art-duo">
            <img src={require("../assets/images/art4a.jpg")} />
            <img src={require("../assets/images/art4b.jpg")} />
          </div>
          <div className="art-duo">
            <img src={require("../assets/images/art5a.jpg")} />
            <img src={require("../assets/images/art5b.jpg")} />
          </div>
          <div className="art-duo">
            <img src={require("../assets/images/art6a.jpg")} />
            <span>
              <a href="https://mubi.com/cast/parker-marx">Parker Marx</a> and
              myself
            </span>
            <img src={require("../assets/images/art6b.jpg")} />
            <span>
              <a href="https://www.comisjessica.com/">Jessica Comis</a> and
              myself
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
