import React, { useEffect, useState } from "react";

import { sanityClient } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const News = () => {
  const [news, setNews] = useState(false);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "news"] | order(_createdAt asc) {
          newsTitle,
          newsText,
          newsImage,
          newsHref
        }`
      )
      .then((data) => setNews(data))
      .catch(console.error);
  }, []);

  return (
    <div className="news">
      {news &&
        news.map((item) => (
          <div className="news-data" key={item.newsTitle}>
            <a href={item.newsHref}>
              <div className="news-card">
                <div className="news-image">
                  <img
                    src={urlFor(item.newsImage).width(400).url()}
                    alt={item.newsTitle}
                    className="news-image"
                  />
                </div>
                <div className="news-text">
                  <div className="news-title">
                    <h1>{item.newsTitle}</h1>
                  </div>
                  <div className="news-text">
                    <span>{item.newsText}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
};

export default News;
