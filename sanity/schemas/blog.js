const blog = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      name: 'body',
      type: 'richText',
      title: 'Blog'
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
