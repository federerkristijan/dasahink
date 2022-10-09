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
      name: 'body',
      type: 'richText',
      title: 'Film Card'
    },
    {
      title: "Image",
      name: "image",
      type: "image"
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
