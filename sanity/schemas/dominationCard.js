const dominationCard = {
  name: "dominationCard",
  title: "DominationCard",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
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

export default dominationCard;
