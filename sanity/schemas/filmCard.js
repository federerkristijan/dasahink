const filmCard = {
  name: "filmCard",
  title: "FilmCard",
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
      title: 'Film Card'
    },
    {
      name: "link",
      type: "url",
    },
  ],
};

export default filmCard;
