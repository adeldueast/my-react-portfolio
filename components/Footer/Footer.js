import styles from "./Footer.module.css";
import Socials from "./../Socials/Socials";
import React from "react";
import MediaQuery from "react-responsive";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MediaQuery maxWidth={768}>
        {<Socials direction="horizontal" className={styles.bg} />}
      </MediaQuery>

      <p>
        All credit goes to
        <a href="https://github.com/bchiang7" target="_blank"> Brittanny Chiang</a> for the
        design
      </p>
    </footer>
  );
};

export default Footer;
