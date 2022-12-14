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
    }
  ],
};

export default blog;
