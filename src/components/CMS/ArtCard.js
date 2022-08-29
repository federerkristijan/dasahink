/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import BlockContent from "@sanity/block-content-to-react";
import { sanityClient, imageUrlBuilder } from "../../client";

export default function ArtCard() {
  const [artCardData, setArtCardData] = useState(null);

  useEffect(() => {
    // GROQ Query
    sanityClient.fetch(
      `*[_type == "image"]{
        title,
        description,
        image{
          asset_>{
            _id,
            url
          }
        }
      }`
    )
    .then((data) => setArtCardData(data))
    .catch(console.error);
  }, [])

  return (
     <div className="card-wrapper">
      <div className="card-title">
        <h3>my card stories is where its all at. join join me there</h3>
        {/* slug is link to card url */}
        {artCardData &&
          artCardData.map((image, index) => {
            <Link to={'/' + image.image.current} key={image.image.current}>
              <span key={index}>
                <img src={image.image.asset.url} alt="card-image" />
                <h2>{image.title}</h2>
                <p>{image.description}</p>
              </span>
            </Link>
          })}
      </div>
    </div>
  );
}
