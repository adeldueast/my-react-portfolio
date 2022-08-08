import styles from "./Socials.module.css";
import { svgs } from "../../public/svgs/svgs";

const Socials = (props) => {
  console.warn(props)
  return (
    <ul class={`${styles.socials} ${props.direction == 'vertical' ? styles.column : styles.row}`}>
      <li>
        <a href="#">{svgs.github}</a>
      </li>
      <li>
        <a href="#">{svgs.instagram}</a>
      </li>
      <li>
        <a href="#">{svgs.twitter}</a>
      </li>
      <li>
        <a href="#">{svgs.linkedIn}</a>
      </li>
    </ul>
  );
};

export default Socials;
