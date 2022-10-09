const blog = {
  name: "blog",
  type: "document",
  title: "Blog",
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
      }
    },
    {
      name: 'topic',
      type: 'reference',
      to: [
        {
          type: 'topic'
        }
      ]
    }
  ],
};

export default blog;
