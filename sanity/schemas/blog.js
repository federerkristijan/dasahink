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
      name: 'text',
      type: 'text',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
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
