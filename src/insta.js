// /src/insta.js
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { sanity, imageUrlBuilder } from './sanity';

const query = `
  *[ _type == 'insta' && slug.current == $slug ]
`;

function Insta() {
  // this variable is populated from `react-router` which pulls it from the URL
  const { slug } = useParams();

  // data is fetched from sanity via the sanity client and stored into
  // application state via react-query. note that the slug is used as the
  // "query key": https://react-query.tanstack.com/guides/query-keys
  const { data = [] } = useQuery(slug, () => sanity.fetch(query, { slug }));

  // we'll use destructuring assignment to return the first mab lib
  const [insta] = data;

  // this is a react "effect" hook: https://reactjs.org/docs/hooks-effect.html
  // we use this to watch for changes in the `slug` or `answers` variables and
  // update local storage when those change.
  useEffect(() => {
    localStorage.setItem(slug, JSON.stringify(insta));
  }, [slug, insta]);

  if (!insta) {
    return <h1>Loading…</h1>;
  }

  // once the mad lib is loaded, we can map through the structured content to
  // find our placeholder shape. the end result is an array of these placeholders
  // const placeholders = madLib?.story
  //   .map((block) => block.children.filter((n) => n._type === 'placeholder'))
  //   .flat();

  // using the above placeholders array, we calculate whether or not all the
  // blanks are filled in by checking the whether every placeholder has a value
  // in the `answers` state variable.
  // const allBlanksFilledIn = placeholders?.every(
  //   (placeholder) => answers[placeholder._key],
  // );

  return (
    <>
      <h2 className="insta-title">{insta.title}</h2>
      <img
        className="insta-image"
        alt={insta.title}
        src={imageUrlBuilder.width(425).height(425).image(insta.image).url()}
      />
        </>
      //     {/* this is a simple link back to the main mab libs index */}
      //     <Link className={styles.button} to="/">
      //       ← More Mad Libs
      //     </Link>
      //   </>
      // )}
    // </>
  );
}

export default Insta;
