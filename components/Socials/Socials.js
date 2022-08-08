import styles from "./Socials.module.css";
import { svgs } from "../../public/svgs/svgs";

const Socials = (props) => {

  return (
    <ul className={`${styles.socials} ${props.direction == 'vertical' ? styles.column : styles.row}`}>
      <li>
        <a href="https://github.com/adeldueast">{svgs.github}</a>
      </li>
      <li>
        <a href="https://www.instagram.com/aka.adel">{svgs.instagram}</a>
      </li>
      <li>
        <a >{svgs.twitter}</a>
      </li>
      <li>
        <a href="https://ca.linkedin.com/in/adel-kouaou-b219571b8">{svgs.linkedIn}</a>
      </li>
    </ul>
  );
};

export default Socials;
