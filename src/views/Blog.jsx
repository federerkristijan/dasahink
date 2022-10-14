import React, { useEffect, useState } from "react";
import { sanityClient } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
// import { PortableText } from "@portabletext/react";

const Blog = (props) => {
  const [blog, setBlog] = useState(false);

  const builder = imageUrlBuilder(sanityClient);

  // const richText = {
  //   types: {
  //     // defining image block
  //     images: ({ value }) => <img src={value.imageUrl} alt="" />,
  //     callToAction: ({ value, isInline }) =>
  //       isInline ? (
  //         <a href={value.url}>{value.text}</a>
  //       ) : (
  //         <div className="callToAction">{value.text}</div>
  //       ),
  //   },
  //   marks: {
  //     // defining link block
  //     link: ({ children, value }) => {
  //       const rel = !value.href.startsWith("/")
  //         ? "noreferrer noopener"
  //         : undefined;
  //       return (
  //         <a href={value.href} rel={rel}>
  //           {children}
  //         </a>
  //       );
  //     },
  //   },
  // };

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
          </div>
        ))}
    </>
  );
};

export default Blog;
