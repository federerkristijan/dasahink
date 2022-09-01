import React from "react";

// import { videos } from "./data";

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
        {/* {(videos || []).map(({ id, src, description }) => (
          <span key={id}>
            <img className="images" src={src} alt={videos.id} />
            <p>{videos.description}</p>
          </span>
        ))} */}
        <iframe
          src="https://www.youtube.com/embed/NkvWDAXCIXw"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
      <div className="film">
        <iframe
          src="https://www.youtube.com/embed/fCZeCFOjdVU"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          />
      </div>-card
        <p>Above is the trailer for a fantasy erotic short I shot for <a href="https://erikalust.com/">Erika Lust Xconfessions</a>.</p>
    </div>
  );
};

export default Film;
