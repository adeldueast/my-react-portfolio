import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>What's Next?</h2>
      <h1>Get In Touch</h1>
      <p>
        If you have any questions or simply want to get in touch with me, feel free to send me an email.
      </p>
      <a href="mailto:adel.kouaou@hotmail.com" className="button">
        Contact Me
      </a>
    </section>
  );
};

export default Contact;
