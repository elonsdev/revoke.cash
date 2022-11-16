// For some reason next-seo's DefaultSeo isn't working, so I'll do it like this
export const defaultSEO = {
  // title + description are included through next-translate
  openGraph: {
    url: 'https://revoke.cash/',
    images: [
      {
        url: 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face-with-open-mouth-and-cold-sweat.png',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'ismywalletpwned',
    type: 'website',
  },
  twitter: {
    handle: '@RoscoKalis',
    site: '@RevokeCash',
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
