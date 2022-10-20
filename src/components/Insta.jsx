import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

// credits to https://github.com/MohammedRaji/react-ig-feed of react-ig-feed.js
const Insta = () => {
  return (
    <InstagramFeed
      token= {process.env.REACT_APP_INSTA_ACCESS_TOKEN}
      counter="36"
      height="200"
      width="200"
    />
  );
};

export default Insta;
