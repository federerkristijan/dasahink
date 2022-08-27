/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient, imageUrlBuilder } from "../../client";

export default function Insta() {
  const [instaData, setInstaData] = useState(null);

  useEffect(() => {
    // GROQ Query
    sanityClient
      .fetch(
        `*[_type == "image"]{
        title,
        image{
          asset_>{
            _id,
            url
          }
        }
        slug
      }`
      )
      .then((data) => setInstaData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="insta-wrapper">
      <div className="insta-title">
        <h3>my Insta stories is where its all at. join join me there</h3>
        {/* slug is link to insta url */}
        {instaData &&
          instaData.map((image, index) => {
            <Link to={'/' + image.slug.current} key={image.slug.current}>
              <span key={index}>
                <img src={image.image.asset.url} alt="insta-image" />
              </span>
            </Link>
          })}
      </div>
    </div>
  );
}
