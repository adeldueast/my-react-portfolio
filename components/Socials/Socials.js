import styles from "./Socials.module.css";
import { svgs } from "../../public/svgs/svgs";

const Socials = (props) => {

  return (
    <ul className={`${styles.socials} ${props.direction == 'vertical' ? styles.column : styles.row}`}>
      <li>
        <a href="https://github.com/adeldueast" target="_blank">{svgs.github}</a>
      </li>
      <li>
        <a href="https://www.instagram.com/aka.adel" target="_blank">{svgs.instagram}</a>
      </li>
      <li>
        <a >{svgs.twitter}</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/adel-kouaou-b219571b8/" target="_blank">{svgs.linkedIn}</a>
      </li>
    </ul>
  );
};

export default Socials;
