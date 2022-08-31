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
          src="https://www.youtube.com/embed/MA5ZyYXhyOY"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
    </div>
  );
};

export default Film;
