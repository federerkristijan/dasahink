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
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Video",
      name: "video",
      type: "file",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link",
      name: "link",
      type: "url",
    },
  ],
};

export default filmCard;
