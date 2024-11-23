import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import styles from '../components/presentation.module.css';

const Presentation = () => {
  return (
    <article className={styles.presentation__container}>
      <div className={styles.presentation__layer}>
        <h1>
          Momezz: Desarrollo Web Innovador
        </h1>
        <p className={styles.presentation__paragraph}>Transformando ideas en experiencias digitales cautivadoras.</p>
      </div>
      <div className={styles.presentation__text_cont}>
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
              <FaGithub />
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
              <CiLinkedin />
            </div>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Presentation;
