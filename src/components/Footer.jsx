import React from "react";
import { faInstagram, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/dasa_hink/">
        <FontAwesomeIcon icon={faInstagram} color="black" style={{ fontSize: "2rem" }} />
      </a>
      <a href="https://www.youtube.com/c/DasaHink">
        <FontAwesomeIcon icon={faYoutube} color="black" style={{ fontSize: "2rem"}} />
      </a>
      <a href="https://open.spotify.com/artist/2R9QkYgRpegCRZlCHYQmJO?si=dq46tstJRLiVfyiKlvArng">
        <FontAwesomeIcon icon={faSpotify} color="black" style={{ fontSize: "2rem"}} />
      </a>
    </div>
  );

};

export default Footer;
