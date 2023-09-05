import Link from 'next/link';
import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <section className={styles.not_found__container}>
      <h1 className={styles.not_found__title}>
        Tengo malas noticias para ti
      </h1>
      <p className={styles.not_found__paragraph}>
        Es posible que la página que estás buscando haya sido eliminada o no
        esté disponible temporalmente
      </p>
      <Link href="/" className={styles.not_found__btn}>VOLVER A LA PÁGINA DE INICIO</Link>
      <h2 className={styles.not_found__title}>
        Error 404
      </h2>
    </section>
  );
};

export default NotFound;
