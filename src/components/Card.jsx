import styles from "../components/card.module.css";
import PropTypes from "prop-types";
import Image from "next/image";

const Card = ({ element }) => {
  return (
    <article className={styles.card__container}>
      <Image
        className={styles.card__image}
        src={element.image}
        alt={element.ability}
        width={110}
        height={120}
        priority
      />
      <h2 className={styles.card__title}>{element.ability}</h2>
    </article>
  );
};

Card.propTypes = {
  element: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Card;
