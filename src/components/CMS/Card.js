// /src/MadLib.js
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
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


  // this variable is populated from `react-router` which pulls it from the URL
  // const { slug } = useParams();

  // // data is fetched from sanity via the sanity client and stored into
  // // application state via react-query. note that the slug is used as the
  // // "query key": https://react-query.tanstack.com/guides/query-keys
  // const { data = Card } = useQuery(slug, () => sanityClient.fetch(query, { slug }));

  // // we'll use destructuring assignment to return the first mab lib
  // const [Card] = data;

  // // this will store the state of the answers of this mad lib
  // const [answers, setAnswers] = useState(
  //   // if the items exist in localStorage, then
  //   localStorage.getItem(slug)
  //     ? // then set the initial state to that value
  //       JSON.parse(localStorage.getItem(slug))
  //     : // otherwise, set the initial state to an empty object
  //       {}
  // );

  return (<>
    <h1>this is card title</h1>
    <h3>this is card text</h3>

  </>);
}

 Card;
