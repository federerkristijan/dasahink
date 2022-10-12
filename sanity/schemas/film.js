const film = {
  name: "film",
  title: "Fil",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: 'body',
      type: 'richText',
      title: 'Film'
    },
    {
      name: "link",
      type: "url",
    },
  ],
};

export default film;
