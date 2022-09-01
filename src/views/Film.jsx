import React from "react";

const Film = () => {
  return (
    <div className="film">
      <div className="film-header">
        <h4>
          One of my favourite things is manifesting an entire concept and
          bringing it into life through video. Here are some Videos I directed
          in the last years!
        </h4>
      </div>
      <div className="film-card">
        <iframe
          src="https://www.youtube.com/embed/NkvWDAXCIXw"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
      <div className="film-card">
        <iframe
          src="https://www.youtube.com/embed/fCZeCFOjdVU"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
      <div className="film-description">
        <span>
          Above is the trailer for a fantasy erotic short I shot for{" "}
          <a href="https://erikalust.com/">Erika Lust Xconfessions</a>.
        </span>
        <span>Written and directed by: Hadas Hinkis</span>
        <span>Cinematography: <a href="https://tobijall.wixsite.com/my-site">Tobi Jall</a></span>
        <span>Produced by: <a href="https://www.amardbirdfilms.com/">Amard Bird Films</a></span>
        <span>Performers: <a href="https://www.youtube.com/watch?v=v8cgzwaDqxI">Lina Bembe</a>, Natalia Portnoy, Sasha Krohn</span>
        <span>Set design: Angela Riviera and <a href="http://www.chikatakabayashi.com/">Chika Takabayashi</a></span>
        <span>Costumes: <a href="https://annemarinafidler.com/">Anne Marina Fiedler</a></span>
        <span>Make Up: <a href="https://nuriadelario.tumblr.com/">Nuria de Lario</a></span>
        <span>Music: <a href="https://www.discogs.com/artist/3907952-Gad-Baruch-Hinkis">Gad Baruch Hinkis</a></span>
      </div>
    </div>
  );
};

export default Film;
