// For some reason next-seo's DefaultSeo isn't working, so I'll do it like this
export const defaultSEO = {
  // title + description are included through next-translate
  openGraph: {
    url: 'https://ismywalletsafu.vercel.app/',
    images: [
      {
        url: 'https://ismywalletsafu.vercel.app/assets/images/revoke-card.png',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'is my wallet safu?',
    type: 'website',
  },
  twitter: {
    handle: '@elonsdev',
    site: '@elonsdev',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    { rel: 'apple-touch-icon', href: '/assets/images/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.json' },
  ],
};
