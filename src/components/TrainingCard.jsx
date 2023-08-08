import styles from '../components/trainingCard.module.css';
import PropTypes from 'prop-types';
import Image from 'next/image';

const TrainingCard = ({ element }) => {
  return (
    <article className={styles.training_card__container}>
      <Image
        className={styles.training_card__image}
        src={element.image}
        alt={element.institute}
        width={110}
        height={120}
        priority
      />
      <h2 className={styles.training_card__title}>{element.obtainedTitle}</h2>
      <p className={styles.training_card__paragraph}>
        {element.endingYear} <span>- {element.institute}</span>
      </p>
    </article>
  );
};

TrainingCard.propTypes = {
  element: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default TrainingCard;
