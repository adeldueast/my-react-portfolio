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
      "Entity Framework Core",
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
    title: "Spotify Artist Tracker",
    description: (
      <p >
        A web app that allow you keeping track of your favorite artists on Spotify. View
        all their albums, tracks & featuring, incoming concerts and play their audio samples. <span>Test application with following account.  Email: adel.kouaou.test@outlook.com Password: Password123$</span>
      </p>
    ),
    image: "spotify-app.png",
    technologies: ["Angular", "Spotify API", "Bandsintown API", "Google Map","Tailwind CSS"],
    links: [
      {
        tooltip: "Repository",
        svg: svgs.github,
        redirect:
          "https://github.com/adeldueast/Super-Musique-Infinie-Spotify-API",
      },
      {
        tooltip: "Deployed Application",
        svg: svgs.deployed,
        redirect:
          "https://visionary-lamington-1d48e0.netlify.app",
      }
    ],
    featuredTitle: "Featured Project",
  },
  {
    title: "Airline Reviews",
    description: (
      <p >
        Web app that let you post real-time reviews by signin in with ur google account. To take advantage of the benefits that Next.js offers, certain pages uses server-side rendering while others are client-side rendered. <span>This web app was focused on web functionalities over aesthetics</span>.
      </p>
    ),
    image: "airline-reviews2.png",
    technologies: ["React", "Next.js", "Firebase-authentication", "Firebase-firestore"],
    links: [
      {
        tooltip: "Repository",
        svg: svgs.github,
        redirect:
          "https://github.com/adeldueast/Airline-Review",
      },
      {
        tooltip: "Deployed Application",
        svg: svgs.deployed,
        redirect:
          "https://airline-review-app.netlify.app/airlines/Qyuih89ZKQtSB8sAHu32",
      }
    ],
    featuredTitle: "Featured Project",
  },
  {
    title: "Disney Clone",
    description: (
      <p > 
       A Disney clone web app that list popular/top rated movies using The Movie Database (TMDB) API. To take full advantage Next.js, every pages are server-side rendered. Images are lazy-loaded on scrolls and it is possible to preview a movie/serie trailers.
      </p>
    ),
    image: "disney-clone.png",
    technologies: ["React", "Next.js", "NextAuth.js", "Firebase-authentication", "Firebase-firestore", "The Movie Database (TMDB) API" , "Tailwind CSS"],
    links: [
      {
        tooltip: "Repository",
        svg: svgs.github,
        redirect:
          "https://github.com/adeldueast/disney-clone",
      },
      {
        tooltip: "Deployed Application",
        svg: svgs.deployed,
        redirect:
          "https://disn3y-clone.netlify.app/",
      }
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
