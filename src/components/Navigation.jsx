import Link from "next/link";
import styles from "../components/navigation.module.css";

const Navigation = () => {
    return (
      <header className={styles.navigation__container}>
        <div className={styles.navigation__cont_logo}>
          <span className={styles.navigation__logo}>J</span>
          <h3 className={styles.navigation__title}>Julian Gomez Mejia</h3>
        </div>
        <nav className={styles.navigation__nav}>
          <ul className={styles.navigation__ul_nav}>
            <li className={styles.navigation__li_nav}>
              <Link className={styles.navigation__navlink} href="/">Inicio</Link>
            </li>
            <li className={styles.navigation__li_nav}>
              <Link className={styles.navigation__navlink} href="/resume">Curriculum</Link>
            </li>
            <li className={styles.navigation__li_nav}>
              <Link className={styles.navigation__navlink} href="/portfolio">Portafolio</Link>
            </li>
            <li className={styles.navigation__li_nav}>
              <Link className={styles.navigation__navlink} href="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Navigation;