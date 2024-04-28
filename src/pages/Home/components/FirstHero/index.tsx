import styles from "./FirstHero.module.css";

const FirstHero = () => {
  return (
    <section className={styles.sectionStyle}>
      <h1>Software Engineering - Web Developer</h1>
      <div className={styles.btncontainer}>
        <div className={styles.btnhero}>
          <p>👋</p>
          <p>Hi Im' Ayush</p>
        </div>
      </div>
    </section>
  );
};

export default FirstHero;
