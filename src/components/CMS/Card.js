/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import BlockContent from "@sanity/block-content-to-react";
import { sanityClient, imageUrlBuilder } from "../../client";

export default function Card() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // GROQ Query
    sanityClient.fetch(
      `*[_type == "document"]{
        title,
        description,
        image,
        slug,
        image{
          asset_>{
            _id,
            url
          }
        }
      }`
    )
    .then((data) => setCardData(data))
    .catch(console.error);
  }, [])

  return (
     <div className="card-wrapper">
      <div className="card-title">
        <h3>my card stories is where its all at. join join me there</h3>
        {/* slug is link to card url */}
        {cardData &&
          cardData.map((image, index) => {
            <Link to={'/' + image.slug.current} key={image.slug.current}>
              <span key={index}>
                <img src={document.image.asset.url} alt="card-image" />
                <h2>{document.title}</h2>
                <p>{document.description}</p>
              </span>
            </Link>
          })}
      </div>
    </div>
  );
}
