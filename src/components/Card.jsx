import styles from "../components/card.module.css";
import PropTypes from 'prop-types';
import Image from "next/image";

const Card = ({element}) => {
    return (
      <article className={styles.card__container}>
        <h2>{element.nameTechnology}</h2>
        <Image className={styles.card__image} src={element.image} alt={element.nameTechnology} width={110} height={120} priority />
      </article> 
    )
}

Card.propTypes = {
  element: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Card;