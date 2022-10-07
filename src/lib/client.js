// /src/client.js
import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const sanityClient = SanityClient({
  projectId: 'usg155is',
  dataset: 'production',
  apiVersion: '2022-10-06',
  useCdn: true,
});

export const imageUrlBuilder = ImageUrlBuilder(sanityClient);
