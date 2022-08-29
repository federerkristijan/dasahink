import React from "react";

const Art = ({artImg}) => {
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
          {(artImg || []).map(({id, img, description}) => (
              <span key={id}>
                <img
                  className="images"
                  src={img}
                  alt={artImg.id}
                />
                <p>{artImg.description}</p>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Art;
