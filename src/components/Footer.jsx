import React from "react";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <span>(49)17639956749</span>
      <a href="/">hhinkis@gmail.com</a>
      <a href="https://www.instagram.com/dasa_hink/">
        <FontAwesomeIcon icon={faInstagram} color="black" style={{ fontSize: "2rem"}} />
      </a>
      <a href="https://www.youtube.com/c/DasaHink">
        <FontAwesomeIcon icon={faYoutube} color="black" style={{ fontSize: "2rem"}} />
      </a>
    </div>
  );
};

export default Footer;
