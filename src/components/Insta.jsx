import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

// credits to https://github.com/MohammedRaji/react-ig-feed
const Insta = () => {
  return (
    <InstagramFeed
      token= {process.env.INSTA_TOKEN}
      counter="36"
    />
  );
};

export default Insta;
