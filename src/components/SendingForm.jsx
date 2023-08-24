// components/Loading.js
import styles from '../components/sendingForm.module.css';

const SendingForm = () => {
  return (
    <div className={styles.sending_form__loading}>
      <div className={styles.sending_form__spinner}></div>
      <div className={styles.sending_form__text}>Cargando...</div>
    </div>
  );
};

export default SendingForm;
