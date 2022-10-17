const domination = {
  name: "domination",
  title: "Domination",
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
      type: "text",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],
};

export default domination;
