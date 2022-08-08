import { svgs } from "../../public/svgs/svgs";
export const projects = [
  {
    title: "Web Crawler",
    description:
      (<p>A basic web-crawler that performs a breadth first search given a certain depth and a starting url point. It extracts valid all emails and visited pages without duplicates.</p>),
    image: "web-crawler.png",
    technologies: ["C#", ".NET"],
    links: [
      {
        svg: svgs.github,
        redirect: "https://github.com/adeldueast/WebCrawler-BFS-DEPTH",
      },
    ],
    featuredTitle: "Featured Project",
  },

  {
    title: "Rust Recoil",
    description: (<p>A minimal console application that controls weapon’s recoil with a 1ms precision. It includes customizable features as custom keybinds and custom configuration to make it look realistic. Vanguard is also very lightweight as it takes less than 1% cpu usage. <br /><span>For educational purposes only *</span> </p>),
    image: "rust-recoil.png",
    technologies: ["C#", ".NET", "Auth.gg API"],
    links: [
      {
        svg: svgs.github,
        redirect: "https://github.com/adeldueast/Unify",
      },
      {
        svg: svgs.youtube,
        redirect: "https://www.youtube.com/watch?v=cFx1SuLu62c",
      },
    ],
    featuredTitle: "Featured Project",
  },
];
