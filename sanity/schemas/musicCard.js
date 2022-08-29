const musicCard = {
  name: "musicCard",
  title: "MusicCard",
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
      title: "Video",
      name: "video",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "slug",
    //   type: "slug",
    //   options: { source: "title" },
    //   validation: (Rule) => Rule.required(),
    // },
  ],
};

export default musicCard;
