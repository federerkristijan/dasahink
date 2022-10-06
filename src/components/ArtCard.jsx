/* eslint-disable no-eval */
import React, { useState, useEffect } from "react";
import { sanityClient } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const ArtCard = () => {
  const [artCardData, setArtCardData] = useState(false);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    // GROQ Query
    sanityClient
      .fetch(
        `*[_type == "image"] | order (_createdAt asc) {
        title,
        description,
        image
      }`
      )
      .then((data) => setArtCardData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="art-card">
      {artCardData &&
        artCardData.map((item) => {
          <div className="a-data">
            <div className="a-image">
              {item.image && (
                <img
                  src={urlFor(item.image).width(200).url()}
                  alt={item.title}
                  className="blog-image"
                />
              )}
            </div>
            <div className="a-text">
              <div className="a-title">
                <h2>{item.title}</h2>
              </div>
              <div className="a-description">
                <p>{item.description}</p>
              </div>
            </div>
          </div>;
        })}
    </div>
  );
};

export default ArtCard;
