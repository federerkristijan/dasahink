import React from "react";

import { videos } from "./data";

const Film = () => {
  return (
    <div className="film">
      <div className="film-title">
        <h4>
          One of my favourite things is manifesting an entire concept and
          bringing it into life through video. Here are some Videos I directed
          in the last years!
        </h4>
      </div>
      <div className="film-card">
        {(videos || []).map(({ id, img, description }) => (
          <span key={id}>
            <img className="images" src={img} alt={videos.id} />
            <p>{videos.description}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Film;
