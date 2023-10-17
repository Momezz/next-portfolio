import styles from '../components/presentation.module.css';

const Presentation = () => {
  return (
    <article className={styles.presentation__container}>
      <div className={styles.presentation__text_cont}>
        <h2 className={styles.presentation__title}>
          DESARROLLADOR WEB
        </h2>
        <div className={styles.presentation__links}>
          <a
            className={styles.presentation__a}
            href="https://github.com/Momezz"
            target="_blank"
          >
            <div
              className={
                styles.presentation__logo_github +
                " " +
                styles.presentation__logos
              }
            >
              GitHub
            </div>
          </a>
          <a
            className={styles.presentation__a}
            href="https://www.linkedin.com/in/juliangomezmejiamedellin/"
            target="_blank"
          >
            <div
              className={
                styles.presentation__logo_linkedin +
                " " +
                styles.presentation__logos
              }
            >
              in
            </div>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Presentation;
