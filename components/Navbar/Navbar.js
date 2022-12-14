import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const toggleMenu = () => {
    const hamburger = document.querySelector(`.${styles.hamburger}`);
    const options = document.querySelector(`.${styles.options}`);
    const isToggled = document
      .querySelector(`.${styles.hamburger}`)
      .getAttribute("data-toggled");
    if (isToggled === "false") {
      [
        hamburger.setAttribute("data-toggled", true),
        options.setAttribute("data-toggled", true),
      ];
    } else if (isToggled === "true") {
      [
        hamburger.setAttribute("data-toggled", false),
        options.setAttribute("data-toggled", false),
      ];
    }
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>AK</h1>

      <div
        data-toggled="false"
        className={styles.hamburger}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul data-toggled="false" className={styles.options}>
        <li>
          <Link href="#about">
            <a onClick={toggleMenu}>About</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a onClick={toggleMenu}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a onClick={toggleMenu}>Contact</a>
          </Link>
        </li>
        <button className="button" href="#">
          Resume
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
