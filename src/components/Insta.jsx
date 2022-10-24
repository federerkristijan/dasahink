import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

// FB.api(
//   '/5461191130602782',
//   'GET',
//   {},
//   function(response) {
//       // Insert your code here
//   }
// );
// credits to https://github.com/MohammedRaji/react-ig-feed of react-ig-feed.js
const Insta = () => {
  return (
    <InstagramFeed
      token= {process.env.REACT_APP_INSTA_ACCESS_TOKEN_DEV}
      counter="36"
    />
  );
};

export default Insta;
