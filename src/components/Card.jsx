import styles from '../components/card.module.css';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Card = ({ element }) => {
  return (
    <article className={styles.card__container}>
      <h2 className={styles.card__title}>{element.ability}</h2>
      <div className={styles.card__level}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className={styles.card__image_cont}>
        <Image
          className={styles.card__image}
          src={element.image}
          alt={element.ability}
          width={110}
          height={120}
          priority
        />
      </div>
      <div className={styles.card__skill_type_cont}>
        <h3 className={styles.card__skill_type_title}>[Habilidad/Tecnica]</h3>
        <p className={styles.card__skill_type_paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          enim eveniet.
        </p>
        <hr className={styles.card__skill_hr} />
      </div>
      <div className={styles.card__skill_copyright}>
        <span>©2023 MOMEZZ.</span>
      </div>
    </article>
  );
};

Card.propTypes = {
  element: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Card;
