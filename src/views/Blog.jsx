import React, { useEffect, useState } from "react";
import {sanityClient} from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"] | order(_cratedAt asc) {
          title,
          text,
          image
        }`
      )
      .then((data) => setBlog(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blog">
        {blog &&
          blog.map((item) => (
            <div className="b-data" key={item.title}>
              <div className="b-image-data">
                {item.image && (
                  <img
                    src={urlFor(item.image).width(200).url()}
                    alt={item.title}
                    className="blog-image"
                  />
                )}
              </div>
              <div className="b-title-data">
                <h2>{item.title}</h2>
              </div>
              <div className="b-text-data">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
      </div>
  );
};

export default Blog;
