import styles from '../components/presentation.module.css';
import Image from 'next/image';

const Presentation = () => {
  return (
    <article className={styles.presentation__container}>
      <div className={styles.presentation__image_cont}>
        <Image
          className={styles.presentation__image}
          src="https://res.cloudinary.com/dgouwu7h7/image/upload/v1692068634/portfolio/6be76283c3a15d87322215bac1579256.jpg"
          alt="image"
          width={110}
          height={120}
          priority
        />
      </div>
      <div className={styles.presentation__text_cont}>
        <h2 className={styles.presentation__title}>
          Hola, mi nombre es Julian Gomez Mejia y construyo paginas Web
        </h2>
        <div className={styles.presentation__links}>
          <a
            className={styles.presentation__a}
            href="https://github.com/Momezz"
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
