import styles from "../components/proyectCard.module.css";
import PropTypes from 'prop-types';
import Image from "next/image";


const ProyectCard = ({ element }) => {
  return (
    <article className={styles.proyect_card__container}>
      <div className={styles.proyect_card__cont_img}>
        <Image className={styles.proyect_card__img} src={element.images[0]} alt="image" width={110} height={120} priority />
      </div>
      <div className={styles.proyect_card__text}>
        <h2 className={styles.proyect_card__title}>{element.title}</h2>
        <p className={styles.proyect_card__paragraph}>{element.description[0]}</p>
        <div className={styles.proyect_card__cont_btns}>
          <div className={styles.proyect_card__btn_left + ' ' + styles.proyect_card__btn}>
            <a className={styles.proyect_card__a} href={element.repositoryLink} target="_blank">Repositorio</a>
          </div>
          <div className={styles.proyect_card__cont_right + ' ' + styles.proyect_card__btn}>
            <a className={styles.proyect_card__a} href={element.pageLink} target="_blank">Ver demo</a>
          </div>
        </div>
      </div>
    </article>
  )
}

ProyectCard.propTypes = {
  element: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};


export default ProyectCard;