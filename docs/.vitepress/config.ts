import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "en-US",
  title: "CodeQuest.dev",
  description: "An free guide for software development interviews.",
  base: "/",
  lastUpdated: true,

  cleanUrls: true,
  head: [
    //Google Analytics
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=GTM-WPJNPGLK' } //[!code focus]
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-WPJNPGLK');` //[!code focus]
    ],
    
    //Google AdSense
    [
      "script",
      {
        "data-ad-client": "ca-pub-3517052833771002", //[!code focus]
        async: '',
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
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
          { text: "Interview Ready", link: "/interview-preparedness" }
          // ...
        ],
      },
      // {
      //   text: "Question-Bank",
      //   items: [
      //     { text: "Javascript-Questions", link: "/javascript-questions" },
      //     // ...
      //   ],
      // },
      {
        text: "Question-Bank",
        items: [
          {
            text: "Javascript-Questions ",
            collapsed: false,
            items: [{ text: "Beginner-Level", link: "/javascript/javascript-questions" }, { text: "Intermediate-Level", link: "/javascript/intermediate-questions" }],
          },
          {
            text: "Node.js-Questions ",
            collapsed: false,
            items: [{ text: "Beginner-Level", link: "/node-js/beginner-level" }],
          },
        ],
      },
    ],

    footer: {
      message: "Made By Sourav Bandyopadhyay",
      // copyright: 'Copyright © 2019-present Evan You'
    },
  },
});
