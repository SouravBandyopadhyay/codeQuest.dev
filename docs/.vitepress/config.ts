import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "en-US",
  title: "CodeQuest.dev",
  description: "An free guide for software development interviews.",

  lastUpdated: true,

  cleanUrls: true,
  head: [
    [
      "script",
      {
        async: "true",
        src: "https://www.googletagmanager.com/ns.html?id=GTM-WPJNPGLK",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'GTM-WPJNPGLK');",
    ],
  ],

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/SouravBandyopadhyay/codeQuest.dev",
      },
    ],
    nav: [
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
      { text: "Support this guide", link: "/support" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Preface", link: "/preface" },
          // ...
        ],
      },
      {
        text: "Question-Bank",
        items: [
          { text: "Javascript-Questions", link: "/javascript-questions" },
          // ...
        ],
      },
    ],
    // footer: {
    //   message: 'Made By Sourav Bandyopadhyay',
    //   // copyright: 'Copyright © 2019-present Evan You'
    // }
  },
});
