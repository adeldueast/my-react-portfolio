import styles from "./Side.module.css";
import Socials from "./../Socials/Socials";

const Side = (props) => {
  return (
    <div
      className={`
        ${styles.side} 
        ${props.side == "left" ? styles.left : styles.right}
        `}
    >
  
      {
        props.side == "left" 
        ?  <Socials direction = {'vertical'} /> 
        :  <a href="mailto:adel.kouaou@hotmail.com">adel.kouaou@hotmail.com</a> 
      }
      
    </div>
  );
};

export default Side;
