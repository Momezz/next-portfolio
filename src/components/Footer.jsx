import styles from "../components/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <p className={styles.footer__paragraph}>© 2023 Mi Portafolio. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
