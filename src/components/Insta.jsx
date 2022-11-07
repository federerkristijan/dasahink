import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

// credits to https://github.com/MohammedRaji/react-ig-feed of react-ig-feed.js
const Insta = () => {
  return (
    <InstagramFeed
      token= {process.env.REACT_APP_INSTA_ACCESS_TOKEN}
      counter="36"
    />

  //   <InstagramFeed
  //   token= {process.env.REACT_APP_INSTA_ACCESS_TOKEN_DEV}
  //   counter="36"
  // />
  );
};

export default Insta;
