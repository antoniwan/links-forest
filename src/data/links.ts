import type { LinksData } from "./types";

export const linksData: LinksData = {
  profile: {
    name: "Antonio Rodriguez Martinez",
    subtitle: "Builder, Writer, Healer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Antonio",
  },
  links: [
    {
      title: "My Blog",
      url: "https://blog.example.com",
      description: "Thoughts on technology and healing",
    },
    {
      title: "Portfolio",
      url: "https://portfolio.example.com",
      description: "My latest projects and work",
    },
    {
      title: "Book a Session",
      url: "https://calendly.com/example",
      description: "Schedule a healing session",
    },
  ],
  social: [
    {
      platform: "twitter",
      url: "https://twitter.com/example",
      icon: "twitter",
    },
    {
      platform: "github",
      url: "https://github.com/example",
      icon: "github",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/example",
      icon: "linkedin",
    },
  ],
};
