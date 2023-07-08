import styles from "../components/trainingCard.module.css";
import PropTypes from 'prop-types';
import Image from "next/image";

const TrainingCard = () => {
    return(
        <article className={styles.training_card__container}>
        <Image className={styles.training_card__image} src='https://tse1.mm.bing.net/th?id=OIP.hxVdqWW-fYoBZbRDI6cZzwHaEQ&pid=Api&P=0&h=180' alt="image" width={110} height={120} priority />
        <h2 className={styles.training_card__title}>Desarrollo web</h2>
        <p>2023 <span>- Udemy</span></p>
      </article> 
    )
}

TrainingCard.propTypes = {
    elements: PropTypes.objectOf(PropTypes.objectOf).isRequired,
  };

export default TrainingCard;