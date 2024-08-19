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
    [
      "script",
      {
        async: "true",
        src: "https://www.googletagmanager.com/gtag/js?id=G-9PZ9P0S989",
      },
    ],
    [
      "script",
      {},
      ` window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-9PZ9P0S989');`,
    ],
    [
      "script",
      {},
      ` window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`,
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
        ],
      },
    ],

    footer: {
      message: "Made By Sourav Bandyopadhyay",
      // copyright: 'Copyright © 2019-present Evan You'
    },
  },
});
