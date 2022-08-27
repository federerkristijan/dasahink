// /src/insta.js
// import { useQuery } from "react-query";
// import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanityClient, imageUrlBuilder } from "../../client";

export default function Insta() {
  const [instaData, setInstaData] = useState(null);

  useEffect(() => {
    // GROQ Query
    sanityClient
      .fetch(
        `*[_type == "document"]{
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

  return <div className="insta-wrapper"></div>;
}
