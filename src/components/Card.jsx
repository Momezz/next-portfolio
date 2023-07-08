import styles from "../components/card.module.css";
import PropTypes from 'prop-types';
import Image from "next/image";

const Card = () => {
    return (
      <article className={styles.card__container}>
        <h2>Java</h2>
        <Image className={styles.card__image} src='https://tse4.explicit.bing.net/th?id=OIP.lxGrRREqByKPrMOc5TiNKwHaGK&pid=Api&P=0&h=180' alt="image" width={110} height={120} priority />
      </article> 
    )
}

Card.propTypes = {
  elements: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Card;