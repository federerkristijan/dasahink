import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

// credits to https://github.com/MohammedRaji/react-ig-feed
const Insta = () => {
  return (
    <InstagramFeed
      token="IGQVJVWDZAuMkpDZAzlNZAUcyOFdhYWMxQk9zN0NpR2V1UllmZAS1xLTdrMXhOc2RySUhhcmZADQWpfYUVxTjNzRWU3Ung3TzhGdS1jOHFhQ1B3aGtaN0lyMWkyd3VrZA2NqcE1mUzkzSERwdXBzcGRxYWlOdm5HNVVETDBKN200"
      counter="6"
    />
  );
};

export default Insta;
