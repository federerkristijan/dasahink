// /src/MadLib.js
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import BlockContent from "@sanity/block-content-to-react";
import { sanityClient, imageUrlBuilder } from "./client";

// const query = `
//   *[ _type == 'card'] { title, description, image, slug }
// `;

function Card() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "post]`
    )
  })


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

  return <></>;
}

export default Card;
