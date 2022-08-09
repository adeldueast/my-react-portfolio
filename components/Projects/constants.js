import { svgs } from "../../public/svgs/svgs";
export const projects = [
  {
    title: "Childcare Management",
    description: (
      <p>
        A web app that allows you to manage children. Invite users (staff or
        guardians) and assign them to a group or children. Create daily
        attendance/absence, logbook (journal) and add photos to child&apos;s
        galleries with the posibility of tagging other childs in the photo.
        Real-time data updates and notifications. Back-end & front-end made from
        scratch.
      </p>
    ),
    image: "childcare-app.png",
    technologies: [
      ".NET",
      "Angular",
      "Material",
      "SQL-SERVER",
      "Entity Framework",
      "Heroku",
      "BackBlaze Buckets",
      "SignalR (Websocket)",
    ],
    links: [
      {
        tooltip: "Back-end Repository",
        svg: svgs.github,
        redirect:
          "https://github.com/adeldueast/GarderieManagement.CleanArchitechture",
      },
      {
        tooltip: "Front-end Repository",
        svg: svgs.github,
        redirect: "https://github.com/adeldueast/GarderieManagement.Client",
      },
      {
        tooltip: "Deployed Application",
        svg: svgs.deployed,
        redirect:
          "https://childcare-management-demo.netlify.app/login?returnUrl=%2F",
      },
    ],
    featuredTitle: "Featured Project",
  },
  {
    title: "Rust Anti-Recoil",
    description: (
      <p>
        A minimal windows form application that controls weapon’s recoil with a
        1ms precision. It includes customizable features as custom keybinds and
        custom configuration to make it look realistic. Unify is also very
        lightweight as it takes less than 1% cpu usage.
        <br />
        <span>*Educational purposes only*</span>{" "}
      </p>
    ),
    image: "rust-recoil-app.png",
    technologies: ["C#", ".NET WinForms"],
    links: [
      {
        tooltip: "Repository",
        svg: svgs.github,
        redirect: "https://github.com/adeldueast/Unify",
      },
      {
        tooltip: "Youtube",
        svg: svgs.youtube,
        redirect: "https://www.youtube.com/watch?v=cFx1SuLu62c",
      },
    ],
    featuredTitle: "Featured Project",
  },
  {
    title: "Spotify Artist Tracker",
    description: (
      <p>
        A web app for keeping track of your favorite artists on Spotify. View
        all their albums, tracks, incoming concerts and play any tracks audio
        sample.
      </p>
    ),
    image: "spotify-app.png",
    technologies: ["Angular", "Spotify API", "Bandsintown API", "Goggle Map"],
    links: [
      {
        tooltip: "Repository",
        svg: svgs.github,
        redirect:
          "https://github.com/adeldueast/Super-Musique-Infinie-Spotify-API",
      },
    ],
    featuredTitle: "",
  },
  {
    title: "Web Crawler",
    description: (
      <p>
        A basic web-crawler that performs a breadth first search given a certain
        depth and a starting url point. It extracts valid all emails and visited
        pages without duplicates.
      </p>
    ),
    image: "web-crawler-app.png",
    technologies: ["C#", "Html Agility Pack"],
    links: [
      {
        tooltip: "Repository",
        svg: svgs.github,
        redirect: "https://github.com/adeldueast/WebCrawler-BFS-DEPTH",
      },
    ],
    featuredTitle: "",
  },
];
