import { useState, useEffect } from "react";
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

  return (<>
    <h1>this is card title</h1>
    <h3>this is card text</h3>

  </>);
}
