const blogCard = {
  name: "blogCard",
  title: "BlogCard",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Text",
      name: "text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required(),
    }
  ],
};

export default blogCard;
