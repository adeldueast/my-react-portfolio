import { projects } from "./constants";
import styles from "./Projects.module.css";

const Projects = () => {

  return (
    <section id='projects'>
      <h2 className={styles["projects-title"]}>Some Things I’ve Built</h2>

      <ul className={styles.projects}>
        {projects.map((project, index) => (
          <li key={`project-${index}`}>
            <div className={styles["projects-img"]}>
              <a >
                <img src={`/images/${project.image}`} alt="" />
              </a>
            </div>

            <div className={styles["projects-content"]}>
              {project.featuredTitle && <p>{project.featuredTitle}</p>}

              <h3>{project.title}</h3>

              <div className={styles["projects-content-box"]}>
                {project.description}
              </div>

              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={`techno-${index}`}>{tech}</li>
                ))}
              </ul>

              <div className={styles["projects-links"]} >
                {project.links.map((link, index) => (
                  <a key={`project-links-${index}`} title={link.tooltip}  href={link.redirect} target="_blank" rel="noreferrer" >{link.svg}</a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
