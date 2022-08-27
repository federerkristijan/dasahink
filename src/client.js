// /src/client.js
import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const sanityClient = SanityClient({
  projectId: 'usg155is',
  dataset: 'production',
  // this option enables faster responses
  // but can return stale data at times.
  // recommended for client-side queries
  useCdn: true,
});

export const imageUrlBuilder = ImageUrlBuilder(sanityClient);