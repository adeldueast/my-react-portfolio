import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.intro}>
      <h1>Hi, my name is</h1>
      <h2>Adel Kouaou.</h2>
      <h3>
        I build things for <br /> fun.
      </h3>
      <p>
        {" "}
        I am passionated by techonology and I <span>&#10084;</span> creating.
      </p>
    </section>
  );
};

export default Header;
