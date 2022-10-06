import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sanityClient, imageUrlBuilder } from "../../client";
import imageUrlBuilder from "@sanity/image-url";

export default function ArtCard() {
  const [artCardData, setArtCardData] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    // GROQ Query
    sanityClient.fetch(
      `*[_type == "image"] | order (_createdAt asc) {
        title,
        description,
        image
      }`
    )
    .then((data) => setArtCardData(data))
    .catch(console.error);
  }, [])

  return (
     <div className="card-wrapper">
      <div className="card-title">
        <h3>my Insta stories is where its all at. join join me there</h3>
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
                  <h2>{image.title}</h2>
                </div>
                <div className="a-description">
                  <p>{image.description}</p>
                </div>
              </div>
                </div>})}
      </div>
    </div>
  );
}
