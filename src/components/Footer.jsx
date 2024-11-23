import Link from 'next/link';
import styles from '../components/footer.module.css';
import {
  AiFillPhone,
  AiFillEnvironment,
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <section className={styles.footer__sub_container}>
        <div className={styles.footer__half_container}>
          <div className={styles.footer__icon_container}>
            <span className={styles.footer__icon}>
              <AiFillEnvironment />
            </span>
            <p className={styles.footer__icon_text}>Medellin, Colombia</p>
          </div>
          <div className={styles.footer__icon_container}>
            <span className={styles.footer__icon}>
              <AiFillPhone />
            </span>
            <p className={styles.footer__icon_text}>
              <a
                className={styles.footer__icon_a}
                href="http://wa.me/573007787096?text=Hola."
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 3007787096
              </a>
            </p>
          </div>
          <div className={styles.footer__icon_container}>
            <span className={styles.footer__icon}>
              <AiFillMail />
            </span>
            <Link className={styles.footer__icon_a} href="/contact">
              <p className={styles.footer__icon_text}>julgomez14@gmail.com</p>
            </Link>
          </div>
          <div className={styles.footer__links_container}>
            <a
              href="https://github.com/Momezz"
              target="_blank"
              className={styles.footer__link}
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/juliangomezmejiamedellin/"
              target="_blank"
              className={styles.footer__link}
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.footer__half_container}>
          <div>
            <h2 className={styles.footer__title}> Un viaje a través de mi mundo web</h2>
            <p className={styles.footer__paragraph}>
              Explora mi mundo digital. Este es mi rincón virtual donde comparto
              el fruto de mi pasión por el desarrollo web. Sumérgete en mis
              proyectos y descubre el arte de crear experiencias en línea
              cautivadoras. ¡Bienvenido a mi portafolio digital!
            </p>
          </div>
        </div>
      </section>
      <div>
        <p className={styles.footer__bottom_paragraph}>
          © 2023 - Momezz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
