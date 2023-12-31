"use client";

import styles from '../components/proyectCard.module.css';
import { useState } from 'react';
import { AiOutlineQrcode } from 'react-icons/ai';
import SccanableQR from '../components/ScannableQR';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

const ProyectCard = ({ element, index }) => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <article
      className={
        index % 2 === 0
          ? styles.proyect_card__container
          : styles.proyect_card__invested + " " + styles.proyect_card__container
      }
    >
      <div className={styles.proyect_card__cont_img}>
        <Link
          className={styles.proyect_card__link}
          href={`/portfolio/${element._id}`}
        >
          <Image
            className={styles.proyect_card__img}
            src={element.images[0]}
            alt="image"
            width={320}
            height={0}
            priority
          />
        </Link>
      </div>
      <div>
        {element.qrImage ? (
          <button
            title="Ver en mi movil"
            className={styles.proyect_card__qr_icon}
            onClick={showModalHandler}
          >
            <AiOutlineQrcode />
          </button>
        ) : null}
        <h2 className={styles.proyect_card__title}>{element.title}</h2>
        <h5 className={styles.proyect_card__title_table}>
          Pincipales tecnologías que utilicé
        </h5>
        <ul className={styles.proyect_card__logos_list}>
          {element.technologies.map((logo, index) => (
            <li key={index}>
              <Image
                className={styles.proyect_card__logo}
                src={logo}
                alt="image"
                width={110}
                height={120}
                priority
              />
            </li>
          ))}
        </ul>
        <div className={styles.proyect_card__cont_btns}>
          <div className={styles.proyect_card__btn}>
            <a
              className={styles.proyect_card__a}
              href={element.repositoryLink}
              target="_blank"
            >
              Repositorio
            </a>
          </div>
          <div className={styles.proyect_card__btn}>
            <a
              className={
                styles.proyect_card__a_right + " " + styles.proyect_card__a
              }
              href={element.pageLink}
              target="_blank"
            >
              Ver demo
            </a>
          </div>
        </div>
      </div>
      <div>
        {showModal ? (
          <SccanableQR qr={element.qrImage} closeModal={hideModalHandler} />
        ) : null}
      </div>
    </article>
  );
};

ProyectCard.propTypes = {
  element: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default ProyectCard;
