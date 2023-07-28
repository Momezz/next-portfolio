"use client";

import Link from 'next/link';
import styles from '../components/navigation.module.css';
import { useState } from 'react';

const Navigation = () => {
  const [toogleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toogleMenu);
  };

  return (
    <>
      <div
        className={
          !toogleMenu ? styles.navigation__icon_none : styles.navigation__icon
        }
      >
        <button className={styles.navigation__button} onClick={handleToggle}>
          |||
        </button>
      </div>
      <header
        className={
          toogleMenu
            ? styles.navigation__container_none + " " + styles.navigation__container_desktop
            : styles.navigation__container + " " + styles.navigation__container_desktop
        }
      >
        <Link
        className={styles.navigation__navlink_logo}
          href="/"
        >
          <div className={styles.navigation__cont_logo}>
            <span className={styles.navigation__logo}>J</span>
            <h3 className={styles.navigation__title}>Julian Gomez Mejia</h3>
          </div>
        </Link>
        <nav className={styles.navigation__nav}>
          <ul className={styles.navigation__ul_nav}>
            <li className={styles.navigation__li_nav}>
              <Link
                onClick={handleToggle}
                className={styles.navigation__navlink}
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li className={styles.navigation__li_nav}>
              <Link
                onClick={handleToggle}
                className={styles.navigation__navlink}
                href="/resume"
              >
                Curriculum
              </Link>
            </li>
            <li className={styles.navigation__li_nav}>
              <Link
                onClick={handleToggle}
                className={styles.navigation__navlink}
                href="/portfolio"
              >
                Portafolio
              </Link>
            </li>
            <li className={styles.navigation__li_nav}>
              <Link
                onClick={handleToggle}
                className={styles.navigation__navlink}
                href="/contact"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;