export default {
  name: 'news',
  type: 'document',
  title: 'News',
  fields: [
    {
      name: 'newsTitle',
      type: 'string',
      title: 'News Title'
    },
    {
      name: 'newsText',
      type: 'text',
      title: 'News Text'
    },
    {
      name: 'newsImage',
      type: 'image',
      title: 'News Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'newsHref',
      type: 'url',
      title: 'News Link'
    }
  ]
}
