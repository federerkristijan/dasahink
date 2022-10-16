import React, { useEffect, useState } from "react";
import { sanityClient } from "../lib/client";
// import YouTubePreview from "../../sanity/schemas/youtube";
// import getYouTubeID from "get-youtube-id";

// const YouTubePreview = ({ value, props }) => {
//   const id = getYouTubeID(value.url);
//   const url = `https://www.youtube.com/embed/${id}`;

//   if (!id) {
//     return <div>Missing YouTube URL</div>;
//   }

//   return (
//     <iframe
//       title="YouTube Preview"
//       width="560"
//       height="315"
//       src={url}
//       frameborder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     ></iframe>
//   );
// };

const Film = () => {
  const [film, setFilm] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "film"] | order(_createdAt asc) {
          title,
          richText
        }`
      )
      .then((data) => setFilm(data))
      .catch(console.error);
  }, []);

  return (
    <div className="film">
      <div className="film-title">
        <h5>
          One of my favourite things is manifesting an entire concept and
          bringing it into life through video. Here are some Videos I directed
          in the last years!
        </h5>
      </div>
      <div className="film-card">
        <iframe
          src="https://www.youtube.com/embed/NkvWDAXCIXw"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
      <div className="film-card">
        <iframe
          src="https://www.youtube.com/embed/fCZeCFOjdVU"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
      <div className="film-credits">
        <span>
          Above is the trailer for a fantasy erotic short I shot for{" "}
          <a href="https://erikalust.com/">Erika Lust Xconfessions</a>.
        </span>
        <span>Written and directed by: Dasa Hink</span>
        <span>
          Cinematography:{" "}
          <a href="https://tobijall.wixsite.com/my-site">Tobi Jall</a>
        </span>
        <span>
          Produced by:{" "}
          <a href="https://www.amardbirdfilms.com/">Amard Bird Films</a>
        </span>
        <span>
          Performers:{" "}
          <a href="https://www.youtube.com/watch?v=v8cgzwaDqxI">Lina Bembe</a>,
          Natalia Portnoy, Sasha Krohn
        </span>
        <span>
          Set design: Angela Riviera and{" "}
          <a href="http://www.chikatakabayashi.com/">Chika Takabayashi</a>
        </span>
        <span>
          Costumes:{" "}
          <a href="https://annemarinafidler.com/">Anne Marina Fiedler</a>
        </span>
        <span>
          Make Up: <a href="https://nuriadelario.tumblr.com/">Nuria de Lario</a>
        </span>
        <span>
          Music:{" "}
          <a href="https://www.discogs.com/artist/3907952-Gad-Baruch-Hinkis">
            Gad Baruch Hinkis
          </a>
        </span>
      </div>
      <div className="film-card">
        <iframe
          src="https://www.youtube.com/embed/cgJFMwsoFro"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
      <div className="film-credits">
        <span>
          Virus, video clip for <a href="https://www.anatopia.org/">Anatopia</a>
        </span>
        <span>Director: Dasa Hink</span>
        <span>Director of Photography: Jonas Römmig</span>
        <span>Gaffer: Alex Hassenkamp</span>
        <span>
          Electricians: Franz Weinland, Carina Neubohn, Mathieu von Charmier
        </span>
        <span>1.AD: Halea Isabella Kala</span>
        <span>Costumes: Dasa Hink, Rebecca Allen</span>
        <span>Set: Chika Takabayashi, Angela Riviera</span>
        <span>
          Set Assistance: Clio Flego, Anna Wachsmuth, Andrea Portioli, Isobel
          Dryburgh
        </span>
        <span>Styling Assistant: Daphna Munz</span>
        <span>Make up: Anto Christ, Jessica Comis</span>
        <span>After effects: Aviv Kosloff</span>
        <br />
        <span>
          performers: Henrietta Morgenstern Klaus Plötzlich Yukiko Pica Yamane
          Mr. and Mrs. Jones Natasha Nelson Monica Gentile Anne-Christine Settou
        </span>
        <br />
        <span>Thanks to:</span>
        <br />
        <span>Julian Neville</span>
        <span>Maurice Mersinger</span>
        <span>Claas Redlefsen, KAOS BERLIN</span>
      </div>
      <div className="film-card">
        <iframe
          src="https://www.youtube.com/embed/YFfh5BVCJT8"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
      <div className="film-card">
        <iframe
          src="https://www.youtube.com/embed/0586YokbDFI"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    </div>
  );
};

export default Film;

{/* <div className="data">
  {film &&
    film.map((item) => (
      <div className="f-data" key={item.title}>
        <div className="f-video">
          <a href={item.link} target="_blank" rel="noreferrer">
            <video
              width="400rem"
              height="400rem"
              controls
              autoPlay
              src={item.video}
              type="video/mp4"
            ></video>
          </a>
        </div>
        <div className="f-text">
          <div className="f-title">{item.title}</div>
          <div className="youtube-preview">
            <YouTubePreview />
          </div>
        </div>
      </div>
    ))}
</div>; */}
