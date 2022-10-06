const artCard = {
  name: "artCard",
  title: "ArtCard",
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

export default artCard;
