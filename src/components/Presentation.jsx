import styles from '../components/presentation.module.css';
import Image from 'next/image';

const Presentation = () => {
  return (
    <article className={styles.presentation__container}>
      <div className={styles.presentation__image_cont}>
        <Image
          className={styles.presentation__image}
          src="https://tse4.explicit.bing.net/th?id=OIP.lxGrRREqByKPrMOc5TiNKwHaGK&pid=Api&P=0&h=180"
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
        <p className={styles.presentation__text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          iure tenetur esse dignissimos, aperiam maiores consequuntur iusto,
          enim obcaecati quas nisi. Inventore adipisci ipsa saepe repellat,
          dolorem odit consequatur quam!
        </p>
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
