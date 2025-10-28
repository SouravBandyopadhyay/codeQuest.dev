import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "en-US",
  title: "CodeQuest",
  description: "Master technical interviews & coding challenges",
  base: "/",
  lastUpdated: true,
  cleanUrls: true,

  head: [
    // ---- Open Graph / Twitter Meta Tags ----
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://code-quest-dev.vercel.app/" }],
    ["meta", { property: "og:title", content: "CodeQuest - Master Technical Interviews & Coding Challenges | Complete Interview Prep Guide | CodeQuest.dev" }],
    ["meta", { property: "og:description", content: "Ace your technical interviews with CodeQuest - your comprehensive guide to coding interviews, data structures, algorithms, system design, and more. Free resources for software engineers." }],
    ["meta", { property: "og:image", content: "https://code-quest-dev.vercel.app/og-image.jpg" }], // 🔥 Stored in `.vitepress/public/og-image.jpg`

    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:url", content: "https://code-quest-dev.vercel.app/" }],
    ["meta", { name: "twitter:title", content: "CodeQuest - Master Technical Interviews & Coding Challenges | Complete Interview Prep Guide | CodeQuest.dev" }],
    ["meta", { name: "twitter:description", content: "Ace your technical interviews with CodeQuest - your comprehensive guide to coding interviews, data structures, algorithms, system design, and more. Free resources for software engineers." }],
    ["meta", { name: "twitter:image", content: "https://code-quest-dev.vercel.app/og-image.jpg" }],

    // ---- Google Analytics ----
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=GTM-WPJNPGLK",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-WPJNPGLK');`,
    ],

    // ---- Google AdSense ----
    [
      "script",
      {
        "data-ad-client": "ca-pub-3517052833771002",
        async: "",
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
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/souravbandyopadhyay/",
      },
      {
        icon: "x",
        link: "https://x.com/souravb_1998",
      },
    ],

    nav: [{ text: "Support this guide", link: "/support" }],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Preface", link: "/preface" },
          { text: "Interview Ready", link: "/interview-preparedness" },
        ],
      },
      {
        text: "Question-Bank",
        items: [
          {
            text: "Javascript-Questions ",
            collapsed: false,
            items: [
              {
                text: "Beginner-Level",
                link: "/javascript/javascript-questions",
              },
              {
                text: "Intermediate-Level",
                link: "/javascript/intermediate-questions",
              },
            ],
          },
          {
            text: "Node.js-Questions ",
            collapsed: false,
            items: [
              { text: "Beginner-Level", link: "/node-js/beginner-level" },
            ],
          },
        ],
      },
      {
        text: "Design Patterns",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/design-patterns/intro" },
          { text: "Command Pattern", link: "/design-patterns/command-pattern" },
          { text: "Module Pattern", link: "/design-patterns/module-pattern" },
          { text: "Singleton Pattern", link: "/design-patterns/singleton-pattern" },
        ],
      },
      {
        text: "System Design",
        items: [
          {
            text: "Core Concepts Explained",
            collapsed: false,
            items: [
              {
                text: "CDNs",
                link: "https://souravbandyopadhyay.substack.com/p/the-magic-of-cdns-how-they-help-websites",
              },
              {
                text: "Vertical vs Horizontal",
                link: "https://souravbandyopadhyay.substack.com/p/the-magic-of-cdns-how-they-help-websites",
              },
              {
                text: "Caching",
                link: "https://souravbandyopadhyay.substack.com/p/the-power-of-caching-boosting-performance",
              },
              {
                text: "Rate Limiting",
                link: "https://souravbandyopadhyay.substack.com/p/rate-limiting-protecting-your-systems",
              },
              {
                text: "Latency vs Throughput",
                link: "https://open.substack.com/pub/souravbandyopadhyay/p/latency-vs-throughput-understanding?r=185j2n&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
              },
              {
                text: "Webhook Vs API",
                link: "https://souravbandyopadhyay.substack.com/p/webhook-vs-api-decoding-the-differences",
              },
              {
                text: "CAP Theorem",
                link: "https://open.substack.com/pub/souravbandyopadhyay/p/cap-theorem-the-backbone-of-distributed?utm_campaign=post&utm_medium=web",
              },
            ],
          },
        ],
      },
    ],

    footer: {
      message: "Made By Sourav Bandyopadhyay",
    },
  },
});
