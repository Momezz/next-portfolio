import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styles from '../components/presentation.module.css';

const Presentation = () => {
  return (
    <article className={styles.presentation__container}>
      <div className={styles.presentation__layer}>
        <h1 className={styles.presentation__banner_title}>
          Momezz: Desarrollo Web Innovador
        </h1>
        <p className={styles.presentation__paragraph}>Transformando ideas en experiencias digitales cautivadoras.</p>
      </div>
        <div className={styles.presentation__links_container}>
        <a
              href="https://github.com/Momezz"
              target="_blank"
              className={styles.presentation__a}
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/juliangomezmejiamedellin/"
              target="_blank"
              className={styles.presentation__a}
            >
              <AiFillLinkedin />
            </a>
        </div>
    </article>
  );
};

export default Presentation;
