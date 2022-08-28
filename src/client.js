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

//al tren; ovo bi ti radilo, ako bi dodao tamo i localhjost:3000, da. zato sam izbunjen jer sma radio sve po tutorialu

export const imageUrlBuilder = ImageUrlBuilder(sanityClient);
